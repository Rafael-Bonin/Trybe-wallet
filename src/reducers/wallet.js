// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const GET_INFOS = 'GET_INFOS';
const FETCH_SUCCESS = 'FETCH_SUCCESS';

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_INFOS:
    return ({
      ...state,
      currencies: [...state.currencies],
      expenses: [...state.expenses, {
        id: action.id,
        value: action.value,
        description: action.description,
        currency: action.currency,
        method: action.method,
        tag: action.tag,
        exchangeRates: action.exchangeRates,
      }],
    });
  case FETCH_SUCCESS:
    return ({
      ...state,
      expenses: [...state.expenses, {
        id: action.states.id,
        value: action.states.value,
        description: action.states.description,
        currency: action.states.currency,
        method: action.states.method,
        tag: action.states.tag,
        exchangeRates: action.exchangeRates,
      }],
    });
  default:
    return state;
  }
};

export default walletReducer;
