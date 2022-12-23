import axios from 'axios';
import React, { Component } from 'react';
import { withRouter } from '../HOC/withRouter';

class DetailUsers extends Component {
    state = {
        DetailUsers:{}
    }
    async componentDidMount(){
        console.log(this.props)
        if(this.props.params){
            let id = this.props.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                DetailUsers: res && res.data && res.data.data? res.data.data : {}
            })
        }
    }
    render() {
        let {DetailUsers} = this.state
        return (
            <div className='container'>
                <h1 className='text-center'>List User</h1>
                <div className='row'>
                    {DetailUsers &&
                    <>
                            <div className='col-4'>{1}</div>
                            <div className='col-4'>{DetailUsers.first_name}</div>
                            <div className='col-4'>{DetailUsers.last_name}</div>
                            </>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(DetailUsers); 