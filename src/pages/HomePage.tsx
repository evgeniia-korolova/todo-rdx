import React from 'react';
import { TodoItem } from '../models/todo-item.interface';
import { ListItem } from '../components/ListItem/ListItem';

interface ComponentProps {
  todos: TodoItem[]
}

export const HomePage = ({todos}: ComponentProps) => {
	return (
		<div className='container'>
			{todos.map((todo: TodoItem) => {
				return <ListItem todo={todo} key={todo.id} />;
			})}
		</div>
	);
};
