import { useState } from 'react';
import classes from './Form.module.scss';

export const Form = (props: { createNewToDo: Function }) => {
	const [title, setTitle] = useState<string>('');

	const formSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
		if (title) {
			props.createNewToDo(title);
			setTitle('');
		}
	};

	return (
		<div className={classes.wrapper}>
			<form action='#' onSubmit={formSubmit}>
				<label>
					<input
						value={title}
						type='text'
						className={classes.input}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<button className={classes.button}></button>
				</label>
			</form>
		</div>
	);
};
