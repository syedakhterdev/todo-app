import { useCallback, useState, ChangeEvent } from 'react';
import { TodoType } from '../../types/Todo';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';

export const useTodo = () => {

    const [todo, setTodo] = useState<TodoType>({ name: "", done: false });
    const [todoList, setTodoList] = useState<TodoType[]>([]);
    const [error, setError] = useState<boolean>(false)

    const onChangeAddTodo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        setTodo({ name, done: false });
    }, [setTodo]);

    const getTodoList = useCallback(async () => {
        try {
            let res = await axios.get('/getTodo');
            if (res && res.data) {
                setTodoList(res.data.data);
            }

        } catch (err) {
            console.log(err);
        }

    }, [setTodoList]);

    const AddTodoInList = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        const newTodo = todo;
        if (newTodo.name.length > 0) {
            try {
                await axios.post('/addTodo', { newTodo });
                await getTodoList();

            } catch (e) {
                console.log(e)

            }
            setError(false);
        } else {
            setError(true);
        }

    }, [todo, getTodoList]);

    const deleteTodo = useCallback(async (id: string) => {
        const newtodoList = [...todoList]
        let findObj = newtodoList.findIndex(e => e._id === id);
        newtodoList.splice(findObj, 1);
        try {
            await axios.delete("/deleteTodo", {
                data: {
                    id
                }
            });

        } catch (e) {
            console.log(e)

        }
        setTodoList(newtodoList);


    }, [todoList, setTodoList]);

    const deleteAllTodo = useCallback(async (valueList: TodoType[]) => {
        let doneTodo = valueList.filter(e => e.done === true);
        if (valueList.length > 0 && doneTodo) {
            try {
                await axios.post("/deleteTodoAll", { doneTodo });
                await getTodoList();

            } catch (e) {
                console.log(e)

            }
        }

    }, [getTodoList]);

    const onChangeCheck = useCallback(async (e: ChangeEvent<HTMLInputElement>, id: string) => {
        const val = e.target.checked;
        const newtodoList = [...todoList];
        let list = newtodoList.map((v, i) => {
            if (v._id === id) {
                v.done = val
            }
            return v;
        });

        let findObj = list.find(e => e._id === id);

        try {
            await axios.put("/updateTodo", { newTodo: findObj });

        } catch (e) {
            console.log(e)

        }
        setTodoList(list);

    }, [todoList, setTodoList]);


    return {
        todo,
        todoList,
        onChangeAddTodo,
        AddTodoInList,
        error,
        deleteTodo,
        deleteAllTodo,
        onChangeCheck,
        getTodoList
    };
};
