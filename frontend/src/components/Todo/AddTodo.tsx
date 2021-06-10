import React from 'react';

type Props = {
    onChangeAddTodo: Function;
    AddTodoInList: Function;
    error: boolean
}


const AddTodo: React.FC<Props> = ({ onChangeAddTodo, AddTodoInList , error }) => {

    return (
        <div className="container" style={{ marginTop: "30px", marginBottom: "40px" }}>
            <div className="row">
                <div className="col-md-10 form-group">
                    <input type="name" className="form-control" onChange={(e) => onChangeAddTodo(e)} aria-describedby="emailHelp" placeholder="Add Todo" />
                    {error && <small style={{ marginLeft: "10px", color: "red" }} id="emailHelp" className="form-text">Please Add Todo in Text Field.</small>}

                </div>
                <div className="col-md-2 text-center">
                    <button type="submit" onClick={() => AddTodoInList()} className="btn btn-secondry center" >Add</button>
                </div>
            </div>



        </div>
    );
};
export default AddTodo