import React , {Component} from 'react';

class TodoForm extends Component {
	constructor(props){
		super(props);
		this.state = {inputValue: ''};                            //You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			inputValue: e.target.value
		});
	}
	handleSubmit(){
		this.props.addTodo(this.state.inputValue);
	}
	render() {
		return (
			<div>
				<input
				 	type="text"
				  	value={this.state.inputValue} 
				  	onChange={this.handleChange}
				/>
				<button
					onClick={this.handleSubmit}
				>
				Add Todo</button>
			</div>
		)
	}
}


export default TodoForm;