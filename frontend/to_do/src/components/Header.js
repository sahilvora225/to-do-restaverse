import styles from './Header.module.css';

const Header = (props) => {
    return (
        <form className={styles['header-form']}>
            <input type="text" className={styles['header-input']} name="title" placeholder="Title"/>
            <button className={styles.button} type="submit">Add Task</button>
        </form>
    )
}

export default Header;