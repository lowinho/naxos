import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const RegisterContainer = styled.div`
  .aluno {
    margin-top: 10px;
    border: 1px solid ${primaryColor};
  }

  .curso-aluno {
    margin-top: 10px;
    border: 1px solid ${primaryColor};
  }

  .info-responsavel {
    margin-top: 10px;
    border: 1px solid ${primaryColor};
  }

  .pagamento {
    margin-top: 10px;
    border: 1px solid ${primaryColor};
  }

  .info {
    margin-top: 10px;
    border: 2px solid ${primaryColor};
  }

  p {
    margin-top: 3px;
  }

  strong {
  }
`;

export const Title = styled.h1`
  h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.5em;
  }
`;

export const LinkEdit = styled.div`
  display: flex;
  float: right;

  .edit {
    color: blue;
    margin-right: 10px;
  }

  .delete {
    color: red;
  }
`;
