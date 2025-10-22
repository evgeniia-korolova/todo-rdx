import { Link } from 'react-router-dom';
import { TodoItem } from '../../models/todo-item.interface';
import classes from './ListItem.module.scss';

export const ListItem = ({ todo }: { todo: TodoItem }) => {
	return (
		<Link
			className={`${classes.link} ${
				todo.completed ? classes.completed : classes.uncompleted
			}`}
			to={`/list/${todo.id}`}
		>
			{' '}
			{todo.title}{' '}
		</Link>
	);
};
