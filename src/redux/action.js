import axios from 'axios';
import { ACTION } from './types';
export const fetchData = () => async (dispatch) => {
  dispatch(setLoading());

  try {
    const [positif, sembuh, meninggal] = await Promise.all([
      axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/positif`
      ),
      axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/sembuh`
      ),
      axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/meninggal`
      ),
    ]);

    console.log(positif);

    if (
      positif.status === 200 &&
      sembuh.status === 200 &&
      meninggal.status === 200
    ) {
      dispatch({
        type: ACTION.SET_DATA,
        payload: {
          positif: positif.data,
          sembuh: sembuh.data,
          meninggal: meninggal.data,
        },
      });
    }
  } catch (error) {
    throw error;
  }
};

const setLoading = () => {
  return {
    type: ACTION.LOADING,
  };
};
