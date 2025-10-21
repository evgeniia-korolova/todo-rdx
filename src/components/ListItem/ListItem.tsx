import { TodoItem } from '../../models/todo-item.interface';
import classes from './ListItem.module.scss';
import { Link } from 'react-router-dom';

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
