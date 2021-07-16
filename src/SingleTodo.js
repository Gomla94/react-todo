import React from 'react';



const SingleTodo = (props) => {

    return (
        <div className="single-todo">
            <div className="header">
                <h4 className="header-text" style={{ textDecoration: props.todo.checked && 'line-through' }}>{props.todo.name}</h4>
                <div className="icons-container">
                    <i onClick={() => props.checkTodo(props.todo.id)} className="fa fa-check-circle" style={{ fontSize: 'large', cursor: 'pointer' }}></i>
                    <i onClick={() => props.removeTodo(props.todo.id)} className="fa fa-trash" style={{ fontSize: 'large', cursor: 'pointer', marginRight: '4px' }}></i>
                </div>
            </div>

            <div className="actions">
            </div>
        </div>
    )
};

export default SingleTodo;