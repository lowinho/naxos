import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { isEmail } from 'validator';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form, LinkEdit } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function User({ match }) {
  const id = localStorage.getItem('dados');
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        const { data } = await axios.get(`/users/${id}`);
        // const Foto = get(data, 'Fotos[0].url', '');

        // setFoto(Foto);

        setUser(data.user);
        setEmail(data.email);
        setPassword(data.password);
      } catch (err) {
        toast.error('Houve um erro ao atualizar usuário');
        history.push(`/user/${id}`);
      }
    }

    getData();
  }, [id, setUser, setEmail, setPassword, match]);

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
      if (id) {
        await axios.put(`/users/${id}`, {
          user,
          email,
          password,
        });
        toast.success('Usuário editado com sucesso!');
        history.push('/user');
      } else {
        await axios.post(`/users/`, {
          user,
          email,
          password,
        });
        toast.success('Usuário criado com sucesso!');
        history.push(`/login`);
      }
    } catch (err) {
      toast.error('Houve um erro ao criar usuário');
      history.push(`/user/${id}`);
    }
  }

  return (
    <Container>
      <LinkEdit>
        <div className="link">
          {id === '1' && (
            <Link to="/user/user-list">
              <FaClipboardList
                size={25}
                className="create"
                data-tip="Lista de Usuários"
              />
              <ReactTooltip />
            </Link>
          )}
        </div>
      </LinkEdit>
      <Title>
        <span>Editar Usuário</span>
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

User.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
