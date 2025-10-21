import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import './ToDoList.scss';
import { TodoItem } from '../../models/todo-item.interface';

export const ToDoList = (props: {
	todoList: TodoItem[];
	updateTodo: Function;
	deleteTodo: Function;
}) => {
	const checkedItem = () => {
		return props.todoList
			.filter((item) => item.completed)
			.map((item, idx) => {
				return (
					<ToDoListItem
						todoItem={item}
						key={idx}
						updateTodo={props.updateTodo}
						deleteTodo={props.deleteTodo}
					/>
				);
			});
	};
	const unCheckedItem = () => {
		return props.todoList
			.filter((item) => !item.completed)
			.map((item, idx) => {
				return (
					<ToDoListItem
						todoItem={item}
						key={idx}
						updateTodo={props.updateTodo}
						deleteTodo={props.deleteTodo}
					/>
				);
			});
	};

	return (
		<div className='todo-container'>
			<ul className='todo-list failed'>{unCheckedItem()}</ul>
			<ul className='todo-list completed'>{checkedItem()}</ul>
		</div>
	);
};
