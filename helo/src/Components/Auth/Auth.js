import React, {Component} from 'react';
import axios from 'axios';
import {updateState} from '../../ducks/reducer';
import {connect} from 'react-redux';


class Auth extends Component{
    constructor(){
        super()
        this.state ={
            username: '',
            password: ''
        }
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    }
    handleUsername(element){
        this.setState({
            username:element
        })
    }
    handlePassword(element){
        this.setState({
            password:element
        })
    }

    register(){
        axios.post('/register', {username: this.state.username , password: this.state.password, profile_pic:`https://www.studiblog.net/wp-content/uploads/2016/09/Unbenannt/${this.state.username}.png` }).then(res=>{
          console.log(res.data);
          
          if (res.data[0]){
              const{username, profile_pic} = res.data[0];
              this.props.updateState(username, profile_pic);
              this.props.history.push('/Dashboard')
          }
        })
    }
    
    login(){
        axios.post('/login', {username: this.state.username , password: this.state.password}).then(res=>{
            if (res.data[0]){
                const{username, profile_pic} = res.data[0];
                this.props.updateState(username, profile_pic);
                this.props.history.push('/Dashboard')
            } 
        })
    }
    render(){
        return(
            <div> 
            <h2> Auth </h2>
            <label>
                Username:
                <input type="text" value={this.state.username} onChange={(element)=> this.handleUsername(element.target.value)}/>
            </label>
            <br/>
            <label>
                Password:
                <input type="text" value={this.state.password} onChange={(element)=> this.handlePassword(element.target.value)}/>
            </label> 
            <br/>
                <button onClick ={this.login}> Login </button>
            <br/>
                <button onClick ={this.register}> Register </button>
            </div>
        )
    }
}  
    

export default connect (null, updateState)(Auth)