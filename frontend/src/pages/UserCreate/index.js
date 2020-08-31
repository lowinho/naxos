import React, { useState } from 'react';

import { toast } from 'react-toastify';

import { isEmail } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function UserCreate() {
  const id = localStorage.getItem('dados');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (user.length < 3 || user.length > 30) {
      toast.error('O Usuário precisa ter entre 3 e 30 caracteres');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('Digite um Email válido');
      formErrors = true;
    }

    if (password.length < 6 || password.length > 12) {
      toast.error('A senha precisa ter entre 6 e 12 caracteres');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      if (id === '1') {
        await axios.post(`/users/`, {
          user,
          email,
          password,
        });
        toast.success('Usuário criado com sucesso!');
        history.push(`/user/user-list`);
      } else {
        toast.error('Você não tem acesso para criar um usuário!');
      }
    } catch (err) {
      toast.error('Houve um erro ao criar usuário');
      history.push(`/user/${id}`);
    }
  }

  return (
    <Container>
      <Title>
        <span>Criar Usuário</span>
      </Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={e => setUser(e.target.value)}
          placeholder="Usuário"
        />

        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
