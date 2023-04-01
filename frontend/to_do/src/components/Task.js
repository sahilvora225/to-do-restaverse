import styles from './Task.module.css';

const Task = (props) => {
    return (
        <li className={styles.card}>{props.title}</li>
    )
}

export default Task;