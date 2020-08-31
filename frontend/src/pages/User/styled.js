import styled from 'styled-components';
import { primaryDarkColor } from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
  font-size: 1.5em;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 15px auto;

  input {
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  button {
    color: ${primaryDarkColor};
  }
`;

export const LinkEdit = styled.div`
  display: flex;
  float: right;

  .create {
    color: blue;
  }
`;
