import { useLocation, NavLink } from "react-router-dom";

import Task from '../components/Task';

import styles from './TaskList.module.css';

const TaskList = () => {
    let location = useLocation();
    let path = location.pathname;
    let title = path.slice(1, 2).toUpperCase() + path.slice(2).toLowerCase();
    title = title + 'd Tasks';

    return (
        <div className={styles['task-arena']}>
            <div className={styles['title-row']}>
                <h1>{title}</h1>
                <NavLink to={title.includes('Incomplete') ? '/complete' : '/incomplete'}>
                    &rarr;
                </NavLink>
            </div>
            <ul className={styles['task-list']}>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
                <Task title="Complete ABCD"/>
            </ul>
        </div>
    );
}

export default TaskList;