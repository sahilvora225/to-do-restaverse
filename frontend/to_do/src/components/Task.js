import { useDispatch } from 'react-redux';

import { updateTaskData } from '../store/tasks';

import styles from './Task.module.css';

const Task = (props) => {
    let dispatch = useDispatch();

    let toggleTaskStatus = () => {
        dispatch(updateTaskData({id: props.id, status: +!props.status}))
    }

    return (
        <li className={styles.card} onClick={toggleTaskStatus}>{props.name}</li>
    )
}

export default Task;