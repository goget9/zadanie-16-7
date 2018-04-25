import React, { Component } from 'react';

class TodoForm extends Component {
	constructor(){
		super();
		this.state={todo: ''}
	}
	onClick(event) {
		func1();
		func2();
	}
	render() {
		return (
			<div>
				<input 
					type='text'
					id='todoInput'
					placeholder='To Do'
					value={this.state.todo}
					onChange={event => this.setState({ todo: event.target.value})}
				/>
				<button 
					onClick={
						() => {
							this.props.add(this.state.todo);
							this.setState({todo: ''});
						}
					} 

				/>
			</div>
			)
	}
}

export default TodoForm;