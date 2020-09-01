import styled from 'styled-components';
import { primaryDarkColor, primaryColor } from '../../config/colors';

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;

  a {
    margin: 0 30px;
    color: ${primaryDarkColor};
    margin-bottom: 10px;
    transition: 0.8s;
  }

  a:hover {
    color: ${primaryColor};
  }
`;

export const Title = styled.h1`
  font-size: 1em;
  margin-top: 10px;
  text-align: center;
`;
