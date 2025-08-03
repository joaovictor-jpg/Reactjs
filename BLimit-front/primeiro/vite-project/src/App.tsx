import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to='/'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
