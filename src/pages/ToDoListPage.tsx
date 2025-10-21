import { useState } from 'react';
import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { TodoItem } from '../models/todo-item.interface';

export const ToDoListPage = () => {
	const [todoList, setTodoList] = useState<TodoItem[]>([]);

	const createNewToDo = (text: string) => {
		console.log(text);
		const newTodo: TodoItem = {
			id: todoList.length,
			title: text,
			completed: false,
		};
		setTodoList([...todoList, newTodo]);
	};

	const updateTodo = (todoItem: TodoItem) => {
		const newTodos = todoList.map((todo) => {
			if (todo.id === todoItem.id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		setTodoList(newTodos);
	};
	const deleteTodo = (todoItem: TodoItem) => {
		const newTodos = todoList.filter(
			(todo) => todo.id !== todoItem.id
		);
		setTodoList(newTodos);
	};

	return (
		<>
			
			<Form createNewToDo={createNewToDo} />
			<ToDoList
				todoList={todoList}
				updateTodo={updateTodo}
				deleteTodo={deleteTodo}
			/>
		</>
	);
};
