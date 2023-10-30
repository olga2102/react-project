import styles from "./todo-item.module.css";


function TodoItem({todo, toogleCompleted, deleteTodo}) {

    return (
        <li className={styles.item} >
            <input type="checkbox"  checked={todo.completed} onChange={()=>toogleCompleted(todo.id)}/>
            <p className={styles.text}>{todo.title}</p>
            <button 
            className={styles.delete}
            onClick={() => deleteTodo(todo.id)}
            >&times;</button>
        </li>
    )
}

export default TodoItem;