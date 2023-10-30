import PostItem from "../post-item/post-item";

import styles from './posts.module.css';

function Posts({posts}) {

    return (
        <div>
            <ul className={styles.list}>         
                {posts ?posts.map((post, i) => {
                    return <PostItem key={i} post={post}/>
                }) : ''}
            </ul>
        </div>
    )
}

export default Posts;