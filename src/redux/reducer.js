import { ACTION } from './types';

const initialState = {
  positif: {},
  sembuh: {},
  meninggal: {},
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION.SET_DATA:
      return {
        ...state,
        positif: payload.positif,
        sembuh: payload.sembuh,
        meninggal: payload.meninggal,
        loading: false,
      };

    case ACTION.LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export const dataPositif = (state) => state.positif;
export const dataSembuh = (state) => state.sembuh;
export const dataMeninggal = (state) => state.meninggal;
export const isLoading = (state) => state.loading;
