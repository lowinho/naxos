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

export default function VehicleRegister({ match }) {
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
  const [plate, setPlate] = useState('');
  const [assembler, setAssembler] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`/vehicles/${id}`);
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
        setPlate(data.plate);
        setAssembler(data.assembler);
        setModel(data.model);
        setColor(data.color);
      } catch (err) {
        toast.error('Erro ao consultar cadastro');
      }
    }

    getData();
  }, [id]);

  const handleDeleteAsk = async e => {
    e.preventDefault();
    try {
      await axios.delete(`/vehicles/${id}`);
      // e.currentTarget.remove();
      toast.success('Veículo Deletado com Sucesso');
    } catch (error) {
      toast.error('Erro ao deletar contato');
    }
    history.push(`/vehicle-list/`);
  };

  return (
    <Container>
      <RegisterContainer>
        <LinkEdit>
          <div className="link">
            <Link to={`/vehicle/${id}/edit`}>
              <FaEdit size={25} className="edit" />
            </Link>

            <Link onClick={handleDeleteAsk} to={`/vehicle/delete/${id}`}>
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
          <p>
            <strong>Placa: </strong>
            {plate}
          </p>

          <p>
            <strong>Marca: </strong>
            {assembler}
          </p>
          <p>
            <strong>Modelo: </strong>
            {model}
          </p>

          <p>
            <strong>Cor: </strong>
            {color}
          </p>
        </div>
      </RegisterContainer>
    </Container>
  );
}

VehicleRegister.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
