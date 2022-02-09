import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  validInputs = () => {
    const MIN_PASSWORD = 6;
    const { email, password } = this.state;
    const verificaEmail = /\S+@\S+\.\S+/;
    const testEmail = verificaEmail.test(email);
    const testPassword = password.length >= MIN_PASSWORD;
    return testEmail && testPassword;
  }

  render() {
    const { email } = this.state;
    const { dispatch } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email
            <input
              onChange={ ({ target }) => {
                this.setState({ email: target.value });
              } }
              id="email"
              type="email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              onChange={ ({ target }) => {
                this.setState({ password: target.value });
              } }
              id="password"
              type="password"
              data-testid="password-input"
            />
          </label>
          <Link to="/carteira">
            <button
              onClick={ () => dispatch(userAction(email)) }
              type="button"
              /* recebi ajuda da Kaylane Silva */
              disabled={ !this.validInputs() }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
