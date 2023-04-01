import { useLocation, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Task from '../components/Task';

import styles from './TaskList.module.css';

const TaskList = () => {
    let location = useLocation();
    let path = location.pathname;
    let title = path.slice(1, 2).toUpperCase() + path.slice(2).toLowerCase();
    title = title + 'd Tasks';
    let tasksStatus = title.includes('Incomplete') ? 0 : 1;
    let taskList = useSelector(state => state.taskList);
    let taskComponentList = taskList.filter(
        task => task.status === tasksStatus
    ).map(
        task => <Task {...task} key={task.id}/>
    );

    return (
        <div className={styles['task-arena']}>
            <div className={styles['title-row']}>
                <h1>{title}</h1>
                <NavLink to={tasksStatus ? '/incomplete' : '/complete'}>
                    &rarr;
                </NavLink>
            </div>
            <ul className={styles['task-list']}>
                {taskComponentList}
            </ul>
        </div>
    );
}

export default TaskList;