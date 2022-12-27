import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import { KeyCodeUtils, LanguageUtils } from "../../utils";

import userIcon from '../../assets/images/user.svg';
import passIcon from '../../assets/images/pass.svg';
import './Login.scss';
import { FormattedMessage } from 'react-intl';

import adminService from '../../services/adminService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
    }

    initialState = {
        username: '',
        password: '',
        loginError: '',
        isShowPwd: false,
    }

    state = {
        ...this.initialState
    };

    ChangeUserName = (e) => {
      this.setState({
        username : e.target.value,
      });
    }
    ChangPassword = (e) => {
      this.setState({
        password : e.target.value,
      });
    }
    handleLogin = () =>{
      alert(this.state.username + " " + this.state.password);
    }
    handleShowHidePassword = ()=>{
      this.setState({
        isShowPwd : !this.state.isShowPwd,
      });
    }
    render() {
        const { username, password, loginError } = this.state;
        const { lang } = this.props;

        return (
            <div className="login-wrapper container-fluid">
                <div className="login-container row">
                    <div className="form_login">
                        
                        <h1 className="login-header">Login</h1>
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" value={this.state.username} onChange={(event) => this.ChangeUserName(event)} className="form-control" placeholder="Enter your email" />
                          </div>
                        </div>
                        <div className="col-12 password-field">
                          <div className="mb-3">
                            <label className="form-label">Password  </label>
                            <input type={this.state.isShowPwd ? "text":"password"} value={this.state.password} onChange={(event) => this.ChangPassword(event)} className="form-control" placeholder="Enter your password" />
                          </div>
                          <span onClick={()=>this.handleShowHidePassword()}><i class={this.state.isShowPwd?"fa-solid fa-eye-slash":"fa-solid fa-eye"}></i></span>
                        </div>
                        <div classname="col-12">
                          <div className="mb-3">
                            <input type="submit" onClick={()=> this.handleLogin()} className="form-control submit-form" placeholder="Enter your password" />
                          </div>
                        </div>
                        <div className="col-12">
                          <p>Forgot your password?</p>
                        </div>
                        <div className="or-login">Or Login:</div>
                        <div className="link-social col-12">
                          <a href="#"><i className="fa-brands fa-facebook link-fb" /></a>
                          <a href="#"><i className="fa-brands fa-google-plus-g link-gg" /></a>
                        </div>
                      </div>
                      
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
