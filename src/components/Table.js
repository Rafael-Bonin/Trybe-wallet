import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <div>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { expenses.map((expense) => {
            const { id,
              currency,
              description,
              method,
              tag,
              value,
              exchangeRates } = expense;
            const currencyName = exchangeRates[currency].name;
            const multiplier = value * exchangeRates[currency].ask;
            const exchangeUsed = parseFloat(exchangeRates[currency].ask).toFixed(2);
            const convertedValue = multiplier.toFixed(2);
            const decimalValue = parseFloat(value).toFixed(2);
            return (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ decimalValue }</td>
                <td>{ currencyName }</td>
                <td>{ exchangeUsed }</td>
                <td>{ convertedValue }</td>
                <td>Real</td>
                <td />
              </tr>
            );
          }) }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
