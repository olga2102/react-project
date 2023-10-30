import Comments from "../comments/comments";

import styles from "./single-post.module.css"

function SinglePost({singlePost, singleComments}) {
   
    return(
        <div>
            <h1 className={styles.title}>{singlePost.title}</h1>
            <p className={styles.text}>{singlePost.body}</p>
            <h3 className={styles.head}>Comments</h3>
            {singleComments.length ? singleComments.map((comment) => <Comments key={comment.id} singleComments={comment}/> ) : null}
        </div>
    )
}

export default SinglePost;