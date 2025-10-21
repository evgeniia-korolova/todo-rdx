import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import './assets/scss/normalize.scss';

import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { TodoItem } from './models/todo-item.interface';
import { NotFound } from './pages/NotFound';

const todos: TodoItem[] = [
	{
		id: 0,
		title: 'First',
		completed: false,
	},
	{
		id: 1,
		title: 'Second',
		completed: true,
	},
	{
		id: 2,
		title: 'Third',
		completed: false,
	},
	{
		id: 3,
		title: 'Fouth',
		completed: true,
	},
];

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage todos={todos} />} />
				<Route path='/todo' element={<ToDoListPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
