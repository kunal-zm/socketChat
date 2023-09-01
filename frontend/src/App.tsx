
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import {Routes,Route} from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
  );
}

export default App;
