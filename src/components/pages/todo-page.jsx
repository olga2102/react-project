import React, {useState, useEffect} from "react";
import axios from 'axios';

import Filter from "../filter/filter";
import TodoList from "../todo-list/todo-list";
import AddTodo from "../add-todo/add-todo";
import ClickMe from "../click-me/click-me";
import Notifications from "../notifications/notifications";

const todosUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=4';

function TodoPage() {
    const [todos, setTodos] = useState([]);

    useEffect(()=> {
        axios.get(todosUrl)
        .then((response)=>{
            setTodos(response.data);
        })
    }, []);

    function toogleCompleted(id) {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo, completed: !todo.completed
                }
            }
            return todo;
        })
        setTodos(newTodos)
    }

    function deleteTodo(id) {
        const undeletedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(undeletedTodos);
    }

    const [valueTodo, setValueTodo] = useState('');

    function changeValueTodo(e) {
        setValueTodo(e.target.value);
    };

    function addNewTodo() {
        const extendedTodos = [...todos, {id: Math.random(), title: valueTodo, completed: false}]
        setTodos(extendedTodos);
        setValueTodo('');
    };

    const [filterMeaning, setFilterMeaning] = useState('all');

    const filteredTodo = todos.filter((todo)=>{
        if(filterMeaning === "completed") {
            return todo.completed === true;
        } else if(filterMeaning === "uncompleted") {
            return todo.completed === false;
        } else return todo;
    });

    function filterTodo(value) {
        setFilterMeaning(value);
    }

    const [Notification, SetNotification] = useState(false);

    function NotificationOn() {
        SetNotification(true);
    }

    const [data, setData] = useState([]);

    function newNotification(prev) {
        setData(prev => [...prev, {id: Date.now(), text: 'Notification'}]) 
    }

    function NotificationOff(id) {
        setData((prev) => {
                return prev.filter(item => item.id !== id)
            })
    }


    return (
        <>
            <h1>ToDo</h1>
            <Filter filterTodo={filterTodo}/>
            <TodoList todos={filteredTodo} toogleCompleted={toogleCompleted} deleteTodo={deleteTodo} />
            <AddTodo valueTodo={valueTodo}  changeValueTodo={changeValueTodo} addNewTodo={addNewTodo}/>
            <ClickMe NotificationOn={NotificationOn}  newNotification={newNotification}/>
            { Notification ? <Notifications data={data} NotificationOff={(id) => NotificationOff(id)} /> : ""}
        </>
    )
}

export default TodoPage;