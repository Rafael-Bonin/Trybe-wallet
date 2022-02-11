import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
  }

  componentDidUpdate(prevProps) {
    const { wallet } = this.props;
    const { total } = this.state;
    if (wallet.expenses !== prevProps.wallet.expenses) {
      wallet.expenses.map((expense) => {
        const { value } = expense;
        const { currency } = expense;
        const type = expense.exchangeRates[currency].ask;
        const sum = value * type;
        return this.setState({ total: total + sum });
      });
    }
  }

  render() {
    const { email } = this.props;
    const { total } = this.state;
    return (
      <header>
        <section data-testid="email-field">{ email }</section>
        <section data-testid="total-field">{ total }</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  wallet: state.wallet,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  wallet: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
