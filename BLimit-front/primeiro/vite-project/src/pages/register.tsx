import './index.css';
import { useState } from "react";
import type { IRegister } from "../model/Register";

const api = 'http://localhost:3000/auth/';

const Register = () => {

    const [registerData, setRegisterData] = useState<IRegister>({
        name: '',
        email: '',
        password: ''
    });

    const handleChangeRegister = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRegisterData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registerData.name === '' || registerData.email === '' || registerData.password === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    try {
      const response = await fetch(api+'register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      setRegisterData({
        name: '',
        email: '',
        password: ''
      });

      const result = await response.json();
      alert('Registro realizado com sucesso!');
      console.log('Registro realizado com sucesso:', result);
    } catch (error: Error | any) {
      console.error('Erro ao fazer registro:', error + ', mensagem: ' + error.message);
      alert('Erro ao fazer registro. Verifique os dados e tente novamente.');      
    }
  }

    return (
        <form id='form' onSubmit={handleSubmitRegister}>
            <label className='label' htmlFor="name">Name: </label>
            <input className='input' type='text' id='name' name='name' placeholder='Teste' value={registerData.name} onChange={handleChangeRegister} required />
            <label className='label' htmlFor="email">Email: </label>
            <input className='input' type='email' id='email' name='email' placeholder='teste@gmail.com' value={registerData.email} onChange={handleChangeRegister} required />
            <label className='label' htmlFor="password">Senha: </label>
            <input className='input' type='password' id='password' name='password' placeholder='Sua senha' value={registerData.password} onChange={handleChangeRegister} required />
            <button id='button' type="submit">Enviar</button>
        </form>
    );
}

export default Register;