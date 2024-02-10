import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterResume from './components/RegisterResume';
import LoginRes from './components/LoginRes';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterResume/>} />
        <Route path='/login' element={<LoginRes/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
