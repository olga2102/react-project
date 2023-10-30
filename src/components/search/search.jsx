import React, {useState} from "react";
import styles from "./search.module.css";

function Search({filterPosts}) {
    const [searchValue, setSearchValue] = useState('');

    function changeSearchValue(e) {
        setSearchValue(e.target.value);
        filterPosts(e.target.value);
    }

    return(
        <form className={styles.form}>
            <div className={styles.wrapper}>
                <input className={styles.search} type="text" placeholder="Search" value={searchValue} onChange={changeSearchValue} />
            </div>
        </form>
    )
}

export default Search;