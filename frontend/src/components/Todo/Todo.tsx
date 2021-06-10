import React, { useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { useTodo } from './useTodo';


const Todo: React.FC = () => {
    const { todoList, onChangeAddTodo, AddTodoInList, error, deleteTodo, deleteAllTodo, onChangeCheck , getTodoList } = useTodo();

    useEffect(() => {
        (async function () {
            await getTodoList()
        })();

    }, [getTodoList])

    return (
        <div className="todo-container">
            <AddTodo onChangeAddTodo={onChangeAddTodo} AddTodoInList={AddTodoInList} error={error} />
            <TodoList todoList={todoList} deleteTodo={deleteTodo} deleteAllTodo={deleteAllTodo} onChangeCheck={onChangeCheck} />
        </div>
    );
};
export default Todo