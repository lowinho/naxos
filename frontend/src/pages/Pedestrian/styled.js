import styled from 'styled-components';

import { primaryDarkColor } from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 2rem auto;
  width: 100%;

  input {
    height: 2.5rem;
    margin: 1rem 1rem;
    border-radius: 4px;
    border: 1px solid #ddd;
  }

  textarea {
    margin-bottom: 20px;
    height: 40px;
    padding: 0 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    height: 150px;
    width: 400px;
  }

  button {
    color: ${primaryDarkColor};
    width: 150px;
    margin: 2rem auto;
  }

  input[type='date']:focus:before {
    margin-right: 10px;
    content: attr(placeholder);
  }

  input[type='date']:after {
    content: '' !important;
  }

  input:focus:invalid {
    box-shadow: 0 0 5px #ff0000;
    border-color: #ff0000;
  }

  .own-name {
    margin: auto;
    display: flex;
    width: 100%;
    justify-content: space-between;

    #name {
      width: 68%;
    }

    #phone {
      width: 25%;
    }
  }
  .documents {
    margin: auto;
    display: flex;
    width: 100%;
    justify-content: space-between;

    #rg {
      width: 50%;
    }

    #cpf {
      width: 50%;
    }
  }
  .street-number {
    margin: auto;
    display: flex;
    width: 100%;
    justify-content: space-between;

    #street {
      width: 80%;
    }

    #number {
      width: 20%;
    }
  }
  .another-inf {
    margin: auto;
    justify-content: space-between;
    display: flex;
    width: 100%;

    #district {
      width: 55%;
    }

    #city {
      width: 40%;
    }

    #uf {
      width: 5%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  margin: 10px;
  text-align: center;
`;
