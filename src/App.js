import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterResume from './components/RegisterResume';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterResume/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
