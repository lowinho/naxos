import React from 'react';

import { FaMale, FaTruck, FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { ContainerHome, Title } from './styled';

export default function Home() {
  return (
    <Container>
      <ContainerHome>
        <div className="pedestrian">
          <Link to="/pedestrian-list">
            <FaMale size={120} />
          </Link>
          <Title>
            <span>Pedestres</span>
          </Title>
        </div>

        <div className="vehicle">
          <Link to="/vehicle-list">
            <FaTruck size={120} />
          </Link>
          <Title>
            <span>Veículos</span>
          </Title>
        </div>

        <div className="control">
          <Link to="/control">
            <FaExchangeAlt size={120} />
          </Link>
          <Title>
            <span>Entrada/Saída</span>
          </Title>
        </div>
      </ContainerHome>
    </Container>
  );
}
