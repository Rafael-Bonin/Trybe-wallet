import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;

    return (
      <header>
        <section data-testid="email-field">{ email }</section>
        <section data-testid="total-field">0</section>
        <section data-testid="header-currency-field">BRL</section>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Header);
