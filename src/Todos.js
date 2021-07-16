import React from 'react';


class Todos extends React.Component {


    render(props) {
        return (
            <div className="todos">
                <div className="mainHeader">
                    Todos App
                </div>
                <div>
                    {this.props.children}
                </div>
                <div className="add-todo">
                    <input className="ui input focus" style={{ marginRight: '10px' }} type="text" name="name"></input>
                    <button className="ui primary button" onClick={this.props.createTodo}>Add</button>
                </div>
            </div>
        )
    }
}

export default Todos;