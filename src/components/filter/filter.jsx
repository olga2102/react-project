import styles from "./filter.module.css";

function Filter({filterTodo}) {

    // function onFilterTodo(e) {
    //     filterTodo(e.target.value);
    // }
    
    return (
        <select className={styles.select} onChange={(e)=>{filterTodo(e.target.value)}}>
            <option value="all">Bсе</option>
            <option value="completed">Bыполнено</option>
            <option value="uncompleted">Не выполнено</option>
        </select>
    )
}

export default Filter;