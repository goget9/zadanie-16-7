import React, { Component } from 'react';

class TodoList extends Component {
	render() {
		return (
			<div>
				{this.props.data.map((todo) => {
                    return <div key={todo.id} onClick={() => this.props.remove(todo.id)}>{todo.text}</div>
	            })}
			</div>
		);
	}
} 

export default TodoList;