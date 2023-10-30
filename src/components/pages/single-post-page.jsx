import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import SinglePost from "../single-post/single-post";


function SinglePostPage() {
    const {postId} = useParams();

    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const [singlePost, setSinglePost] = useState('');

    const commentUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    const [singleComments, setSingleComments] = useState('');

    useEffect(()=>{
        axios.get(commentUrl)
        .then((response)=>{
            console.log(response);
            setSingleComments(response.data);
        })
        axios.get(postUrl)
        .then((response)=>{
            setSinglePost(response.data);
        })
    }, []);

    return (
        <SinglePost singlePost={singlePost} singleComments={singleComments}/>
    )
}

export default SinglePostPage;