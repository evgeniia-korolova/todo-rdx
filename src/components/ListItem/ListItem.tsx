import React from 'react';
import { TodoItem } from '../../models/todo-item.interface';
import classes from './ListItem.module.scss';

export const ListItem = ({ todo }: { todo: TodoItem }) => {
	return (
		<a className={`${classes.link} ${todo.completed ? classes.completed : classes.uncompleted}`} href={`/list/${todo.id}`}>
			{' '}
			{todo.title}{' '}
		</a>
	);
};
