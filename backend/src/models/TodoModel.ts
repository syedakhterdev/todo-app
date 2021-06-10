import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';


export interface TodoModel extends Document {
    _id?: string;
    name: string;
    done: boolean;
};

export const TodoSchema = new Schema({
    name: { type: String, required: true },
    done: { type: Boolean, required: true },
});

const Todo = mongoose.model<TodoModel>('todo', TodoSchema);
export default Todo;