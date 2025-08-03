import './index.css';
import { useState } from "react";
import type { ILogin } from "../model/Login";
import Cookies from "js-cookie";

const api = 'http://localhost:3000/auth/';

const Login = () => {

    const [loginData, setLoginData] = useState<ILogin>({
        email: '',
        password: ''
    });

    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLoginData((prevState: ILogin) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (loginData.email === '' || loginData.password === '') {
          alert('Por favor, preencha todos os campos.');
          return;
        }
    
        try {
          const response = await fetch(api+'login', {
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
    
          if (result.token) {
            Cookies.set('token', result.token)
          }
    
          setLoginData({
            email: '',
            password: ''
          });
          alert('Login realizado com sucesso!');
          console.log('Login realizado com sucesso:', result);
        } catch (error: Error | any) {
          console.error('Erro ao fazer login:', error + ', mensagem: ' + error.message);
          alert('Erro ao fazer login. Verifique os dados e tente novamente.');
        }
      }

    return (
        <form id='form' onSubmit={handleSubmitLogin}>
            <label className='label' htmlFor="email">Email: </label>
            <input className='input' type='email' id='email' name='email' placeholder='teste@gmail.com' value={loginData.email} onChange={handleChangeLogin} required />
            <label className='label' htmlFor="password">Senha: </label>
            <input className='input' type='password' id='password' name='password' placeholder='Sua senha' value={loginData.password} onChange={handleChangeLogin} required />
            <button id='button' type="submit">Enviar</button>
        </form>
    );
}

export default Login;