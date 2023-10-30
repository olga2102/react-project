import styles from "./add-todo.module.css";

function AddTodo({valueTodo, changeValueTodo, addNewTodo}) {
  

    return (
        <form onSubmit={(e)=>{e.preventDefault()}} className={styles.form}>
            <input className={styles.input} 
                type="text" 
                value={valueTodo} 
                onChange={changeValueTodo}
            />
            <button className={styles.button} onClick={()=>{addNewTodo()}}>Add</button>
        </form>
    )
}

export default AddTodo;