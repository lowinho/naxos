import React, { useEffect, useState } from 'react';

import { FaPlusSquare, FaWindowClose } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Title, StudentContainer } from './styled';
import history from '../../services/history';

import axios from '../../services/axios';

export default function UserList() {
  // const id = localStorage.getItem('dados');
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/users');
      setUser(response.data);
    }

    getData();
  }, []);

  const handleDelete = async (e, id, index) => {
    e.target.remove();

    try {
      await axios.delete(`/users/${id}`);
      const newUsers = [...user];
      newUsers.splice(index, 1);
      setUser(newUsers);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Você precisa fazer login');
      } else {
        toast.error('Ocorreu um erro ao excluir usuário');
      }

      history.push('/user/user-list');
    }
  };

  return (
    <Container>
      <StudentContainer>
        <Link className="add" to="/user/create-user">
          <FaPlusSquare size={12} data-tip="Novo usuário" />
          <ReactTooltip />
        </Link>
        <span>Cadastrar novo Usuário</span>
        <Title>
          <h1>Usuários</h1>
        </Title>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th />
            </tr>
          </thead>

          {user.map((users, index) => (
            <tbody key={String(users.user)}>
              <tr>
                <td>{users.user}</td>
                <td>{users.email}</td>
                <th>
                  <Link
                    onClick={e => {
                      handleDelete(e, users.id, index);
                    }}
                    to="/user/user-list"
                  >
                    <FaWindowClose size={25} className="delete" />
                  </Link>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </StudentContainer>
    </Container>
  );
}
