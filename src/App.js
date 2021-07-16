import React from 'react';
import './index.css';
import Todos from './Todos';
import SingleTodo from './SingleTodo';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [

            ]
        }

        this.createTodo = this.createTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.checkTodo = this.checkTodo.bind(this);
    }


    createTodo() {
        let todoTitle = document.querySelector('.input').value;
        // console.log(this.state.todos.length + 1)
        const id = this.state.todos.length + 1
        // const newTodos = [...this.state.todos];
        // newTodos.push({ name: todoTitle });
        // this.setState({ todos: newTodos });
        this.setState(myState => ({
            todos: [...myState.todos, { id, name: todoTitle, checked: false }]
        }), this.emptyInput());
    }

    emptyInput() {
        let todoTitle = document.querySelector('.input');
        todoTitle.value = ''
    }

    removeTodo(id) {
        const todos = [...this.state.todos];
        const newTodos = todos.filter((item) => item.id !== id)

        this.setState({ todos: newTodos });
    }

    checkTodo(todoid) {
        const todos = [...this.state.todos];
        const newTodos = todos.map((item) => item.id === todoid ? { ...item, checked: !item.checked } : item);

        // const newTodos = todos.find((item, index) => {
        //     if (item.id === todoid) {
        //         todos[index].checked = !todos[index].checked
        //         return true;
        //     }
        // })

        // console.log(todos)
        this.setState({ todos: newTodos });
        // this.setState({ todos: todos });
    }

    render() {
        return (
            <div className="container">
                <Todos createTodo={this.createTodo}>
                    {this.state.todos.map(todo => {
                        return <SingleTodo removeTodo={this.removeTodo} checkTodo={this.checkTodo} key={todo.id} todo={todo} />
                    })}
                </Todos>
            </div>
        )
    }
}


export default App;

// ReactDOM.render(<App />, document.getElementById('root'));