import TodoItem from "../todo-item/todo-item";
import styles from "./todo-list.module.css"

function TodoList({todos, toogleCompleted, deleteTodo}) {

    return (
        <ul className={styles.list}>
            {todos.map((todo) => {
                return <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        toogleCompleted={(id) => toogleCompleted(id)} 
                        deleteTodo={(id) => deleteTodo(id)}
        />
            })}
        </ul>
    )
}

export default TodoList;