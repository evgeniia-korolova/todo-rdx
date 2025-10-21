import React from 'react';
import { TodoItem } from '../models/todo-item.interface';
import { ListItem } from '../components/ListItem/ListItem';

export const HomePage = (props: { todos: TodoItem[] }) => {
	return (
		<div className='container'>
			{props.todos.map((todo: TodoItem) => {
				return <ListItem todo={todo} key={todo.id} />;
			})}
		</div>
	);
};
