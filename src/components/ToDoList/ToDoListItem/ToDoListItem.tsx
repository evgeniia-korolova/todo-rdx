import { TodoItem } from '../../../models/todo-item.interface';
import './ToDoListItem.scss';

export const ToDoListItem = (props: {
	todoItem: TodoItem;
	updateTodo: Function;
	deleteTodo: Function;
}) => {
	return (
		<li className='todo-list-item__wrapper'>
			<span>{props.todoItem.title}</span>
			<div className='todo-list-item__buttons'>
				<button
					className='btn-trash'
					onClick={() => props.deleteTodo(props.todoItem)}
				></button>
				<button
					className={
						props.todoItem.completed ? 'btn-check' : 'btn-uncheck'
					}
					onClick={() => props.updateTodo(props.todoItem)}
				></button>
			</div>
		</li>
	);
};
