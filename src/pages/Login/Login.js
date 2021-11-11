import React, { Component } from 'react';
import Validator from '../../utils/validator';
import './login.scss';
import { login } from '../../modules/user/store/services';
import { withRouter } from "react-router-dom";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    const rules = [
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'The email field is required.',
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'The email must be a valid email address.',
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'The password field is required.',
      },
      {
        field: 'password',
        method: 'isLength',
        args: [{ min: 5 }],
        validWhen: true,
        message: 'The password must be at least 5 characters.',
      },
    ];
    this.validator = new Validator(rules);
  }

  handleInput = async (e) => {
    await this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    await this.setState({
      errors: this.validator.validate(this.state),
    });
    if(!this.validator.validate(this.state).email && !this.validator.validate(this.state).password) {
      let dataLogin = {
        email: this.state.email,
        password: this.state.password
      }
      await login(dataLogin).then(res =>  {
        if(res.message = "Login successfully") {
          this.props.history.push("/");
        }
      });
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="app-login d-flex flex-column justify-content-center align-items-center">
        <div
          class="logo"
        />
        <br />
        <form className="text-left">
          <div className="contentform">
            <div className="leftcontact">
              <div className="form-group">
                <b className="mb-0">E-mail <span className="validation">*</span></b>
                <br />
                <input className="input-login" type="email" name="email" value={this.state.email} onChange={this.handleInput} />
                {errors.email && <div className="validation" style={{ display: 'block' }}>{errors.email}</div>}
              </div>
              <div className="form-group">
                <b className="mb-0">Password <span className="validation">*</span></b>
                <br />
                <input className="input-login" type="password" name="password" value={this.state.password} onChange={this.handleInput} />
                {errors.password && <div className="validation" style={{ display: 'block' }}>{errors.password}</div>}
              </div>
            </div>
          </div>
          <button type="button" className="button-login" onClick={this.handleSubmit}>Login</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
