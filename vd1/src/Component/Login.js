import React, { Component } from 'react';
import { Link} from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div>
                <div className="container">
  <div className="row">
    <div className="col-3">
    </div>
    <div className="col-6">
      <h1 className="text-center">Sign In</h1>
      <form action="login" method="post">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
          <input type="text" className="form-control" id="exampleInputEmail1" name="user" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" required />
        </div>
        <button type="text-center submit" className="btn btn-primary">Submit</button>
      </form>
      <p>New User? <Link to ={'register'}>Register</Link></p>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Login;