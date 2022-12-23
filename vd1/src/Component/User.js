import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from '../HOC/withRouter';
class User extends Component {
    state={
        listUsers:[]
    }
    
    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2').then(res => {
            this.setState({
                listUsers: res && res.data && res.data.data? res.data.data : []
            })
        })
    }
    View = (user) => {
        this.props.navigate(`${user.id}`)
    };

    render() {
        let listUsers = this.state.listUsers
        return (
            <div className='container'>
                <h1 className='text-center'>List User</h1>
                <div className='row'>
                    {listUsers && listUsers.length>0&&
                        listUsers.map((item, index) =>{
                          return(  <>
                            <div className='col-4' onClick={() =>this.View(item)}>{index + 1}</div>
                            <div className='col-4'>{item.first_name}</div>
                            <div className='col-4'>{item.last_name}</div>
                            </>)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(User);