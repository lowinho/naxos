import * as types from '../types';

const initialState = {
  loginOK: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.loginOK = !newState.loginOK;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      console.log('Deu erro =(');
      return state;
    }

    case types.LOGIN_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
