import React, {useEffect, useState} from "react";
import axios from 'axios';

import Posts from "../posts/posts";
import Search from "../search/search";

const postsUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=9';

function PostsPage() {
    const [posts, setPosts] = useState([]);

    const [filteredPosts, setfilteredPosts] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    useEffect(()=>{
        axios.get(postsUrl)
        .then((response)=>{
            setPosts(response.data);
        })
    }, []);

    function filterPosts(value) {
        if(value) {
            setIsFiltered(true);

            setfilteredPosts(() => {
                return posts.filter((post) => post.title.includes(value) || post.body.includes(value))
            })
        } else setIsFiltered(false);
        
        
    }

    function viewPosts() {
        if (isFiltered) {
            if (filteredPosts.length) {
                return <Posts posts={filteredPosts} />
            } else {
                return 'No filtred posts';
            }
        } else {
            return <Posts posts={posts} />
        }
    }

    return (
        <section className="posts">
            <h1>My Posts</h1>
            <Search filterPosts={filterPosts} />
            {viewPosts()}
            {/* {
                isFiltered && filteredPosts.length ? <Posts posts={filteredPosts} /> : ''
            }
            {
                isFiltered && !filteredPosts.length ? 'no posts' : ''
            }
            {
               !isFiltered ? <Posts posts={posts} /> : ''
            } */}
        </section>
    )
}

export default PostsPage;