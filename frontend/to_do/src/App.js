import { useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header';
import Tasklist from './pages/TaskList';
import { fetchTasksData } from './store/tasks';

import styles from './App.module.css';

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksData());
  }, [dispatch])
  
  return (
    <div className={styles['app']}>
      <Header />
      <Routes>
        <Route path='/incomplete' element={<Tasklist />}/>
        <Route path='/complete' element={<Tasklist />}/>
        <Route path='/*' element={<Navigate to='/incomplete'/>}/>
      </Routes>
    </div>
  );
}

export default App;
