import { Request, Response } from 'express';
import Todo from '../models/TodoModel';
import { TodoModel } from '../models/TodoModel'


export const getTodo = async (_req: Request, res: Response) => {
    try {
        const user = await Todo.find();
        return res.status(200).json({ data: user, meta: { message: 'get Todo List', status: 200, errors: null } });

    } catch (e) {
        return res.status(201).json({ data: null, meta: { message: 'Get todo failed', status: 201, errors: null } });
    }
};

export const addTodo = async (_req: Request, res: Response) => {
    try {
        let todoObj: TodoModel = _req.body.newTodo;
        const newTodo = new Todo(todoObj);
        let result = await newTodo.save();
        return res.status(200).json({ data: result, meta: { message: 'add new Todo', status: 200, errors: null } });

    } catch (e) {
        return res.status(201).json({ data: null, meta: { message: 'Todo not Save', status: 201, errors: null } });
    }
};

export const deleteTodo = async (_req: Request, res: Response) => {
    let todoId = _req.body.id;
    await Todo.deleteOne({ _id: todoId });
    return res.status(200).json({ data: {}, meta: { message: 'Delete Todo', status: 200, errors: null } });
};

export const deleteTodoAll = async (_req: Request, res: Response) => {
    let todoObj = _req.body.doneTodo;
    await Todo.deleteMany({ _id: { $in: todoObj } });
    return res.status(200).json({ data: {}, meta: { message: 'Delete All Todo', status: 200, errors: null } });
};


export const updateTodo = async (_req: Request, res: Response) => {
    try {
        let todoObj: TodoModel = _req.body.newTodo;
        let updateTodo = await Todo.updateOne({ _id: todoObj._id }, { $set: todoObj })
        return res.status(200).json({ data: updateTodo, meta: { message: 'update Todo', status: 200, errors: null } });

    } catch (e) {
        return res.status(201).json({ data: null, meta: { message: 'Todo not Save', status: 201, errors: null } });
    }
};
