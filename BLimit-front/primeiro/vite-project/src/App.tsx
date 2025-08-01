import React, { useState } from 'react'
import type { ILogin } from './model/Login';
import './App.css'

const api = 'http://localhost:3000/auth/login';

function App() {

  const [loginData, setLoginData] = useState<ILogin>({
    email: '',
    password: ''
  });

  const [token, setToken] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`)
      }

      const result = await response.json();

      setToken(result.token);

      console.log(token);
      
      setLoginData({
        email: '',
        password: ''
      });
    } catch (error: Error | any) {
      console.error('Erro ao fazer login:', error + ', mensagem: ' + error.message);
      alert('Erro ao fazer login. Verifique os dados e tente novamente.');
    }
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
