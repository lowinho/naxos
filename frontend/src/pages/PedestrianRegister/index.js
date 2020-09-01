import React, { useEffect, useState } from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { get } from 'lodash';

import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles';
import { Title, RegisterContainer, LinkEdit } from './styled';
import axios from '../../services/axios';

export default function PedestrianRegister({ match }) {
  const id = get(match, 'params.id', '');
  const [name, setName] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`/pedestrians/${id}`);
        // const Foto = get(data, 'Fotos[0].url', '');

        // setFoto(Foto);
        setName(data.name);
        setRg(data.rg);
        setCpf(data.cpf);
        setStreet(data.street);
        setNumber(data.number);
        setDistrict(data.district);
        setCity(data.city);
        setUf(data.uf);
        setPhone(data.phone);
      } catch (err) {
        toast.error('Erro ao consultar cadastro');
      }
    }

    getData();
  }, [id]);

  const handleDeleteAsk = async e => {
    e.preventDefault();
    try {
      await axios.delete(`/pedestrian/${id}`);
      // e.currentTarget.remove();
      toast.success('Pedestre Deletado com Sucesso');
    } catch (error) {
      toast.error('Erro ao deletar pedestre');
    }
    history.push(`/pedestrian-list/`);
  };

  return (
    <Container>
      <RegisterContainer>
        <LinkEdit>
          <div className="link">
            <Link to={`/pedestrian/${id}/edit`}>
              <FaEdit size={25} className="edit" />
            </Link>

            <Link onClick={handleDeleteAsk} to={`/pedestrian/delete/${id}`}>
              <FaWindowClose size={25} className="delete" />
            </Link>
          </div>
        </LinkEdit>
        <Title>
          <span>Cadastro do Professor</span>
        </Title>
        <div className="aluno">
          <p>
            <strong>Nome: </strong>
            {name}
          </p>
          <p>
            <strong>RG: </strong>
            {rg}
          </p>
          <p>
            <strong>CPF: </strong>
            {cpf}
          </p>
          <p>
            <strong>Rua: </strong>
            {street}
          </p>
          <p>
            <strong>Número: </strong>
            {number}
          </p>
          <p>
            <strong>Bairro: </strong>
            {district}
          </p>
          <p>
            <strong>Cidade: </strong>
            {city}/{uf}
          </p>
          <p>
            <strong>Telefone: </strong>
            {phone}
          </p>
        </div>
      </RegisterContainer>
    </Container>
  );
}

PedestrianRegister.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
