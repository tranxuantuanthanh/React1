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
        loginError: ''
    }

    state = {
        ...this.initialState
    };
    render() {
        const { username, password, loginError } = this.state;
        const { lang } = this.props;

        return (
            <div className="login-wrapper container-fluid">
                <div className="login-container row">
                    <div classname="form_login">
                        
                        <h1 classname="text-center">Login</h1>
                        <div classname="col-12">
                          <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Enter your email" />
                          </div>
                        </div>
                        <div classname="col-12">
                          <div className="mb-3">
                            <label className="form-label">Password  </label>
                            <input type="password" className="form-control" placeholder="Enter your password" />
                          </div>
                        </div>
                        <div classname="col-12">
                          <div className="mb-3">
                            <input type="submit" className="form-control" placeholder="Enter your password" />
                          </div>
                        </div>
                        <div classname="col-12">
                          <p>Forgot your password?</p>
                        </div>
                        <div className="col-12">
                          <i className="fa-brands fa-facebook" />
                          <i className="fa-brands fa-google-plus-g" />
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
