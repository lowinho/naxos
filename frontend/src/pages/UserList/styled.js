import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const StudentContainer = styled.div`
  .add {
    text-align: left;
    color: red;
    margin-bottom: 10px;
    margin: auto;
  }

  span {
    margin-left: 5px;
    color: red;
  }

  table {
    width: 100%;
    justify-content: center;
    text-align: center;
    border: 1px solid ${primaryDarkColor};

    thead {
      background: ${primaryColor};
    }
    tbody {
      background: #ced4da;
    }
  }

  a {
    color: black;
    font-weight: bold;
  }

  a:hover,
  .body:hover {
    color: red;
    font-weight: bold;
  }
`;

export const Title = styled.h1`
  h1 {
    margin-bottom: 20px;
    text-align: center;
  }
`;
