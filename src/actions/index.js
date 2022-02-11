import fetchAPI from '../services/MoneyAPI';

// Coloque aqui suas actions
const userAction = (email) => ({
  type: 'GET_EMAIL',
  email,
});

// export const walletAction = ({ id,
//   value,
//   description,
//   currency,
//   method,
//   tag,
//   exchangeRates }) => ({
//   type: 'GET_INFOS',
//   id,
//   value,
//   description,
//   currency,
//   method,
//   tag,
//   exchangeRates,
// });

export const startFetch = () => ({
  type: 'START_FETCH',
});

export const fetchSuccess = (states, exchangeRates) => ({
  type: 'FETCH_SUCCESS',
  states,
  exchangeRates,
});

export const errorFetch = () => ({
  type: 'ERROR_FETCH',
});

export const getMoneyThunk = (states) => async (dispatch) => {
  dispatch(startFetch());
  try {
    const APIFetch = await fetchAPI();
    dispatch(fetchSuccess(states, APIFetch));
  } catch (error) {
    dispatch(errorFetch());
  }
};

export default userAction;
