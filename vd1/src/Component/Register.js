import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <div className="container">
  <div className="row">
    <div className="col-3">
    </div>
    <div className="col-6">
      <h1 className="text-center">Register</h1>
      <form method="post" action="register">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" name="user" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" required />
        </div>
        <button type="text-center submit" className="btn btn-primary">Submit</button>
      </form>
      <p>Have Account? <a href="login">Click to Login!</a></p>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Register;