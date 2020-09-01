import React from 'react';

import { FaMale, FaCarSide, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Title, ContainerHome } from './styled';

export default function Control() {
  return (
    <Container>
      <ContainerHome>
        <div className="pedestrian">
          <Link to="/pedestrian-control">
            <FaMale size={120} />
          </Link>
          <Title>
            <span>Controle de Pedestres</span>
          </Title>
        </div>

        <div className="vehicle">
          <Link to="/vehicle-control">
            <FaCarSide size={120} />
          </Link>
          <Title>
            <span>Controle de Veículos</span>
          </Title>
        </div>

        <div className="Relatory">
          <Link to="/control-list">
            <FaFileAlt size={120} />
          </Link>
          <Title>
            <span>Relatórios</span>
          </Title>
        </div>
      </ContainerHome>
    </Container>
  );
}
