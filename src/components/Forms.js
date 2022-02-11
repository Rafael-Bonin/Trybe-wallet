import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencie, getMoneyThunk } from '../actions';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: '',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencie());
  }

  sendState = () => {
    const { id } = this.state;
    const { dispatch } = this.props;
    this.setState({ id: id + 1, value: '' });
    dispatch(getMoneyThunk(this.state));
  }

  render() {
    const { value } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          <input
            id="value"
            type="number"
            data-testid="value-input"
            onChange={ ({ target }) => {
              this.setState({ value: target.value });
            } }
            value={ value }
          />
        </label>
        <label htmlFor="description">
          <input
            id="description"
            type="text"
            data-testid="description-input"
            onChange={ ({ target }) => {
              this.setState({ description: target.value });
            } }
          />
        </label>
        <label htmlFor="currency">
          <select
            data-testid="currency-input"
            name="currency"
            id="currency"
            onChange={ ({ target }) => {
              this.setState({ currency: target.value });
            } }
          >
            { Object.keys(currencies).map((currencie) => (
              <option key={ currencie }>{ currencie }</option>
            )) }
          </select>
        </label>
        <label htmlFor="method">
          <select
            data-testid="method-input"
            name="method"
            id="method"
            onChange={ ({ target }) => {
              this.setState({ method: target.value });
            } }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          <select
            data-testid="tag-input"
            name="category"
            id="category"
            onChange={ ({ target }) => {
              this.setState({ tag: target.value });
            } }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => this.sendState() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Forms.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Forms);
