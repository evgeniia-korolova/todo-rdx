import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';
import './assets/scss/normalize.scss';

import { ToDoListPage } from './pages/ToDoListPage';
import {
	BrowserRouter,
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { TodoItem } from './models/todo-item.interface';
import { NotFound } from './pages/NotFound';
import { ItemDetails } from './pages/ItemDetails';
import { Layout } from './layouts/Layout';

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

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			errorElement: <NotFound />,
			children: [
				{
					path: '/',
					element: <HomePage todos={todos} />,
				},
				{
					path: '/todo',
					element: <ToDoListPage />,
				},
				{
					path: '/list/:id',
					element: <ItemDetails todos={todos} />,
				},
			],
		},
		{
			path: '*',
			element: <NotFound />,
		},
	],
	{
		basename:
			process.env.NODE_ENV === 'development' ? '/' : '/todo-rdx/',
	}
);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage todos={todos} />} />
				<Route path='/list/:id' element={<ItemDetails todos={todos} />} />
				<Route path='/todo' element={<ToDoListPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter> */}
	</React.StrictMode>
);
