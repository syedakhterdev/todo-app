import React from 'react';
import { TodoType } from '../../types/Todo';

type Props = {
    todoList: TodoType[];
    deleteTodo: Function;
    deleteAllTodo: Function;
    onChangeCheck: Function;
}


const TodoList: React.FC<Props> = ({ todoList, deleteTodo, deleteAllTodo, onChangeCheck }) => {

    return (
        <div className="container" style={{ marginTop: "30px", marginBottom: "40px" }}>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Is Done </th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList && todoList.length > 0 && todoList.map((v, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td><p style={v.done ? { textDecoration: "line-through", fontStyle: "italic" } : {}} >{v.name}</p></td>
                                <td>
                                    <input type="checkbox" onChange={(e) => onChangeCheck(e, v._id)} checked={v.done} className="form-check-input" />
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteTodo(v._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            {todoList && todoList.length > 0 && <div style={{ marginTop: "10px" }}>

                <button className="btn btn-secondry" onClick={() => deleteAllTodo(todoList)}>Delete All Done</button>
            </div>
            }
            {todoList && todoList.length === 0 &&
                <div className="text-center" style={{ marginTop: "40px", fontSize: "22px" }}>
                    <p className=""> No Todo </p>

                </div>
            }


        </div>
    );
};
export default TodoList