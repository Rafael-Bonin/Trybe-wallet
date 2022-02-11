// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
  case FETCH_CURRENCIES:
    return ({
      ...state,
      currencies: action.currencies,
    });
  default:
    return state;
  }
};

export default walletReducer;
