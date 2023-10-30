import styles from "./comments.module.css"

function Comments({singleComments}) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.name}>{singleComments.name}</p>
            <p className={styles.text}>{singleComments.body}</p>
        </div>
    )
}

export default Comments;