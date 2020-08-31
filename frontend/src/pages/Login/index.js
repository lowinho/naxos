import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';

import * as authActions from '../../store/modules/auth/actions';

import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/home');

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (user.length < 3 || user.length > 30) {
      toast.error('O Usuário precisa ter entre 3 e 30 caracteres');
      formErrors = true;
    }

    if (password.length < 6 || password.length > 12) {
      toast.error('A senha precisa ter entre 6 e 12 caracteres');
      formErrors = true;
    }

    if (formErrors) return;
    console.log('enviado');
    dispatch(authActions.loginRequest({ user, password, prevPath }));
  }

  return (
    <Container>
      <Title>
        <span>Login</span>
      </Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          onChange={e => setUser(e.target.value)}
          placeholder="Usuário"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
