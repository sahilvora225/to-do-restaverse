import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addNewTaskData } from '../store/tasks';

import styles from './Header.module.css';

const Header = () => {
    let dispatch = useDispatch();
    let [title, setTitle] = useState('');
    let [submitValue, setSubmitValue] = useState('');

    let formSubmitHandler = (event) => {
        event.preventDefault();
        setSubmitValue(title);
    };

    const inputChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    useEffect(() => {
        if (submitValue === '') {
            return;
        }
        dispatch(addNewTaskData({'name': submitValue, 'status': 0}));
        setTitle('');
        setSubmitValue('');
    }, [submitValue, dispatch]);

    return (
        <form className={styles['header-form']} onSubmit={formSubmitHandler}>
            <input type="text" className={styles['header-input']} name="title" placeholder="Title" required value={title} onChange={inputChangeHandler} />
            <button className={styles.button} type="submit">Add Task</button>
        </form>
    )
}

export default Header;