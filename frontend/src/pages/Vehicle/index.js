import React, { useState, useEffect } from 'react';

import { get } from 'lodash';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function NewTeacher({ match }) {
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
    if (!id) return;

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
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map(error => toast.error(error));
        history.push('/');
      }
    }

    getData();
  }, [
    id,
    setName,
    setRg,
    setCpf,
    setStreet,
    setNumber,
    setDistrict,
    setPhone,
    setPlate,
    setAssembler,
    setModel,
    setColor,
  ]);

  const handleSubmit = async e => {
    e.preventDefault();

    let formErrors = false;

    if (rg.length < 9 || rg.length > 13) {
      toast.error('Digite um RG válido');
      formErrors = true;
    }

    if (cpf.length < 11 || cpf.length > 14) {
      toast.error('Digite um CPF válido');
      formErrors = true;
    }

    if (street.length < 3 || street.length > 50) {
      toast.error('A rua precisa ter entre 3 e 50 caracteres');
      formErrors = true;
    }

    if (number.length < 1 || number.length > 6) {
      toast.error('Digite um número válido');
      formErrors = true;
    }
    if (district.length < 5 || district.length > 120) {
      toast.error('O campo bairro precisa ter entre 3 e 50 caracteres');
      formErrors = true;
    }

    if (city.length < 3 || city.length > 50) {
      toast.error('A cidade precisa ter entre 3 e 50 caracteres');
      formErrors = true;
    }

    if (uf.length < 1 || uf.length > 3) {
      toast.error('Digite um campo UF válido');
      formErrors = true;
    }

    if (phone.length < 9 || phone.length > 15) {
      toast.error('Digite um telefone válido com ddd.');
      formErrors = true;
    }

    if (plate.length < 7 || plate.length > 10) {
      toast.error('A placa precisa ter entre 7 e 10 caracteres');
      formErrors = true;
    }

    if (assembler.length < 3 || assembler.length > 25) {
      toast.error('A marca precisa ter entre 3 e 25 caracteres');
      formErrors = true;
    }

    if (model.length < 3 || model.length > 25) {
      toast.error('O modelo precisa ter entre 3 e 25 caracteres');
      formErrors = true;
    }

    if (color.length < 3 || color.length > 15) {
      toast.error('A cor precisa ter entre 3 e 15 caracteres');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      if (id) {
        await axios.put(`/vehicles/${id}`, {
          name,
          rg,
          cpf,
          street,
          number,
          district,
          city,
          uf,
          phone,
          plate,
          assembler,
          model,
          color,
        });
        toast.success('Veículo editado com sucesso!');
        history.push('/vehicles');
      } else {
        await axios.post(`/vehicles/`, {
          name,
          rg,
          cpf,
          street,
          number,
          district,
          city,
          uf,
          phone,
          plate,
          assembler,
          model,
          color,
        });
        toast.success('Veículo criado com sucesso!');
        history.push(`/vehicles`);
      }
    } catch (err) {
      // const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map(error => toast.error(error));
      } else {
        toast.error(errors);
      }
    }
  };

  return (
    <Container>
      <Title>
        <span>Novo Veículo</span>
      </Title>

      <Form onSubmit={handleSubmit}>
        <div className="own-name">
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome"
            required
          />

          <input
            type="text"
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Telefone"
            required
          />
        </div>

        <div className="documents">
          <input
            type="text"
            id="rg"
            value={rg}
            onChange={e => setRg(e.target.value)}
            placeholder="RG"
            required
          />

          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            placeholder="CPF"
            required
          />
        </div>

        <div className="street-number">
          <input
            type="text"
            id="street"
            value={street}
            onChange={e => setStreet(e.target.value)}
            placeholder="Rua"
            required
          />

          <input
            type="text"
            id="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            placeholder="Número"
            required
          />
        </div>

        <div className="another-inf">
          <input
            type="text"
            id="district"
            value={district}
            onChange={e => setDistrict(e.target.value)}
            placeholder="Bairro"
            required
          />

          <input
            type="text"
            id="city"
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Cidade"
            required
          />

          <input
            type="text"
            id="uf"
            value={uf}
            onChange={e => setUf(e.target.value)}
            placeholder="UF"
            required
          />
        </div>

        <div className="car-info">
          <input
            type="text"
            id="plate"
            value={plate}
            onChange={e => setPlate(e.target.value)}
            placeholder="Placa"
            required
          />

          <input
            type="text"
            id="assembler"
            value={assembler}
            onChange={e => setAssembler(e.target.value)}
            placeholder="Marca"
            required
          />

          <input
            type="text"
            id="model"
            value={model}
            onChange={e => setModel(e.target.value)}
            placeholder="Modelo"
            required
          />

          <input
            type="text"
            id="color"
            value={color}
            onChange={e => setColor(e.target.value)}
            placeholder="Cor"
            required
          />
        </div>

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}

NewTeacher.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
