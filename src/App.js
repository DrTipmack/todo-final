import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Todo } from "./models";
import { listTodos } from "./graphql/queries.js";

import Auth from "./components/signIn.js";

class CreateTodos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			date: "",
			description: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.createTodo = this.createTodo.bind(this);
	}

	async createTodo() {
		await DataStore.save(
			new Todo({
				name: this.state.name,
				owner: this.props.user,
				passed: false,
				completed: false,
				dueDateTime: this.state.dueDateTime,
				description: this.state.description,
			})
		);
	}

	handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			[name]: value,
		});
	}
	render() {
		return (
			<div>
				<form>
					<label>
						Name
						<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
					</label>
					<label>
						Date & Time
						<input type="datetime-local" name="date" value={this.state.date} onChange={this.handleChange} />
					</label>
					<label>
						Description
						<input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
					</label>
				</form>
				<button
					onClick={() => {
						console.log("Name: " + this.state.name);
						console.log("Date: " + this.state.date);
						console.log("Description: " + this.state.description);
						this.createTodo();
					}}
				>
					Submit
				</button>
			</div>
		);
	}
}

async function queryTodos() {
	const todoData = await API.graphql(graphqlOperation(listTodos));
	console.log(todoData);
	return todoData;
}
function App() {
	const [todos, updateTodos] = useState([]);
	const [user, updateUser] = useState(undefined);

	if (user !== undefined) {
		return (
			<div>
				<h5>Hi, {user.attributes.name}</h5>
				<button
					onClick={() => {
						updateTodos(queryTodos());
					}}
				>
					Get Todos
				</button>
				<button onClick={console.log(user)}>User</button>
				<CreateTodos user={user.attributes.email} />
			</div>
		);
	} else {
		return <Auth setUser={updateUser} />;
	}
}
export default App;
