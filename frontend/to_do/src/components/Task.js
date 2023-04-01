import { useDispatch } from 'react-redux';

import { taskActions } from '../store/tasks';

import styles from './Task.module.css';

const Task = (props) => {
    let dispatch = useDispatch();

    let toggleTaskStatus = () => {
        dispatch(taskActions.updateTask({id: props.id, status: +!props.status}))
    }

    return (
        <li className={styles.card} onClick={toggleTaskStatus}>{props.name}</li>
    )
}

export default Task;