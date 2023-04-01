import {Routes, Route, Navigate} from 'react-router-dom';

import Header from './components/Header';
import Tasklist from './pages/TaskList';

import styles from './App.module.css';

function App() {
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
