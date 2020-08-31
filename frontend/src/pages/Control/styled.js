import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
  font-size: 1.5em;
`;

export const ControlContainer = styled.div`
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

  tr:hover {
    background: #F38B8B;
  }

  #exit {
    height: 2rem;
    text-align: center;
  }

  #btn-add {
    margin: 0 3rem;
  }

  #btn-end:hover, #btn-add:hover {
    filter: brightness(0.5);
  }


  }
`;

export const Form = styled.form`
  max-width: 1024px;
  margin: 2rem auto;
  width: 100%;

  input {
    height: 2.5rem;
    margin: 1rem 1rem;
    border-radius: 4px;
    border: 1px solid #ddd;
    text-align: center;
  }

  select {
    height: 2.5rem;
    margin: 1rem 1rem;
    border-radius: 4px;
    border: 1px solid #ddd;
    text-align: center;
  }

  button {
    color: #fff;
    width: 10rem;
  }

  button:hover {
    filter: brightness(0.5);
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

  .fields {
    display: flex;
    justify-content: space-between;

    #date {
      width: 30%;
    }

    .btn-date {
      width: 3rem;
      height: 2.5rem;
      margin: 1rem 0 1rem -1rem;
    }

    #vehicle {
      width: 30%;
    }

    #destiny {
      width: 30%;
    }

    #enter {
      width: 30%;
    }

    .btn-enter {
      width: 3rem;
      height: 2.5rem;
      margin: 1rem 0 1rem -1rem;
    }

    #exit {
      width: 30%;
    }

    .btn-exit {
      width: 3rem;
      height: 2.5rem;
      margin: 1rem 0 1rem -1rem;
    }
  }

  .button {
    margin: 1rem 2rem;
    display: flex;
    justify-content: flex-end;

    #send {
      margin: 0 auto;
    }
  }
`;
