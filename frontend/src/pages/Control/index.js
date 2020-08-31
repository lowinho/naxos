import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Title, ControlContainer, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Control() {
  const [vehicle, setVehicle] = useState([]);
  const [control, setControl] = useState([]);
  const [list, setList] = useState([]);

  const [date, setDate] = useState('');
  const [plate, setPlate] = useState('');
  const [destiny, setDestiny] = useState('');
  const [enter, setEnter] = useState('');
  const [exit, setExit] = useState('');

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/vehicles');
      setVehicle(data);
    }

    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/controls');
      setControl(data);
      setList(data);
    }

    getData();
  }, [setControl]);

  function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
  }

  const getDate = () => {
    const value = new Date();

    const day = value.getDate();
    const month = value.getMonth();
    const year = value.getFullYear();

    const dateNow = `${day}/${month + 1}/${year}`;

    setDate(dateNow);
  };

  const getHour = () => {
    const value = new Date();

    const hour = zeroLeft(value.getHours());
    const min = zeroLeft(value.getMinutes());
    const sec = zeroLeft(value.getSeconds());

    const hourNow = `${hour}:${min}:${sec}`;

    return setEnter(hourNow);
  };

  const handleSubmit = async e => {
    try {
      await axios.post(`/controls/`, {
        date,
        plate,
        destiny,
        enter,
        exit,
      });

      toast.success('Controle criado com sucesso!');
      history.push(`/control`);
    } catch (err) {
      toast.error('Erro ao criar controle!');
      history.push(`/control`);
    }
  };

  const getExit = async (e, index) => {
    e.preventDefault();

    setExit(e.target.value);

    console.log(list);
    e.currentTarget.remove();

    const value = new Date();

    const hour = zeroLeft(value.getHours());
    const min = zeroLeft(value.getMinutes());
    const sec = zeroLeft(value.getSeconds());

    const hourNow = `${hour}:${min}:${sec}`;

    setExit(hourNow);
  };

  const handleUpdate = async (e, id, index) => {
    e.preventDefault();

    const newControls = [...control];
    newControls.splice(index, 1);
    setControl(newControls);

    try {
      await axios.put(`/controls/${id}`, {
        date: setDate(),
        plate: setPlate(),
        destiny: setDestiny(),
        enter: setEnter(),
        exit,
      });
      toast.success('Saída Finalizada com sucesso!');
      history.push(`/control`);
    } catch (err) {
      toast.error('Erro ao finalizar saída!');
      history.push(`/control`);
    }
  };

  return (
    <Container>
      <ControlContainer>
        <Title>Controle</Title>

        <Form onSubmit={handleSubmit}>
          <div className="fields">
            <input
              type="text"
              id="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              placeholder="Data"
              required
            />

            <button type="button" className="btn-date" onClick={getDate}>
              +
            </button>

            <select
              id="vehicle"
              value={plate}
              onChange={e => {
                setPlate(e.target.value);
              }}
            >
              <option>Selecione a Placa</option>
              {vehicle.map(vehicles => (
                <option key={vehicles.id}>{vehicles.plate}</option>
              ))}
            </select>

            <input
              type="text"
              id="destiny"
              value={destiny}
              onChange={e => setDestiny(e.target.value)}
              placeholder="Destino"
              required
            />

            <input
              type="text"
              id="enter"
              value={enter}
              onChange={e => setEnter(e.target.value)}
              placeholder="Entrada"
            />

            <button type="button" className="btn-enter" onClick={getHour}>
              +
            </button>
          </div>

          <div className="button">
            <button type="submit" id="send">
              Enviar
            </button>
          </div>
        </Form>

        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Placa</th>
              <th>Destino</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Dar saída</th>
              <th>Finalizar controle</th>
            </tr>
          </thead>

          {control.map((controls, index) => (
            <tbody key={controls.id}>
              <tr>
                <th>{controls.date}</th>
                <th>{controls.plate}</th>
                <th>{controls.destiny}</th>
                <th>{controls.enter}</th>
                <th>
                  <input
                    type="text"
                    id="exit"
                    value={exit}
                    onChange={e => setExit(e.target.value)}
                    placeholder="Saída"
                  />
                </th>
                <th>
                  <button
                    type="button"
                    id="btn-add"
                    onClick={e => {
                      getExit(e, index);
                    }}
                  >
                    +
                  </button>
                </th>
                <th>
                  <button
                    type="button"
                    id="btn-end"
                    onClick={e => {
                      handleUpdate(e, controls.id, index);
                    }}
                  >
                    Finalizar
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </ControlContainer>
    </Container>
  );
}
