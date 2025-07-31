import React, { useState } from 'react'
import type { ILogin } from './model/Login';
import './App.css'

function App() {

  const [loginData, setLoginData] = useState<ILogin>({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoginData({
      email: '',
      password: ''
    });
  }

  return (
    <form id='form' onSubmit={handleSubmit}>
      <label className='label' htmlFor="email">Email: </label>
      <input className='input' type='email' id='email' name='email' placeholder='teste@gmail.com' value={loginData.email} onChange={handleChange} />
      <label className='label' htmlFor="password">Senha: </label>
      <input className='input' type='password' id='password' name='password' placeholder='Sua senha' value={loginData.password} onChange={handleChange} />
      <button id='button' type="submit">Enviar</button>
    </form>
  )
}

export default App
