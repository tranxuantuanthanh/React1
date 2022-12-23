import React, { Component } from 'react';
import {  NavLink} from 'react-router-dom';

class TopMenu extends Component {
    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
              <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><NavLink className={'nav-link'} to={'register'}>Register</NavLink></li>
                  <li className="nav-item"><NavLink className={'nav-link'} to={'login'}>Login</NavLink></li>
                  <li className="nav-item"><NavLink className={'nav-link'} to={'user'}>User</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
            </div>
        );
    }
}

export default TopMenu;