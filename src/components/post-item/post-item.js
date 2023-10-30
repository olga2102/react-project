import React, {useState} from "react";
import { createPortal } from 'react-dom';
import { Link } from "react-router-dom";

import Modal from "../modal/modal";
import styles from './post-item.module.css';

function PostItem({post}) {
    const [openedModal, setopenedModal] = useState(false);

    function openModal() {
        setopenedModal(true);
    }

    function closeModal() {
        setopenedModal(false);
    }

    return (
        <>
            <li className={styles.item} >
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.text}>{post.body}</p>
                <button className={styles.preview} onClick={openModal}>Preview</button>
                <Link className={styles.link} to={`/posts/${post.id}`}>Go to the Post</Link>
            </li> 
            {openedModal && createPortal 
                (<Modal closeModal={closeModal}> 
                    <div>
                        <h3 className={styles.title}>{post.title}</h3>
                        <p className={styles.text}>{post.body}</p>
                        </div>,                
                </Modal>, document.body)}  
           
        </>
    )
}

export default PostItem;