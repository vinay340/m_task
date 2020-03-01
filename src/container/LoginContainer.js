import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import LoginComponent from './../component/LoginComponent'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginData from '../utils/LoginData'
import { LoginAction } from '../flux/actions/LoginAction'

class LoginContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            u_err:false,
            p_err:false
        }
    }

    componentDidUpdate(prevprops) {
        if (prevprops.login !== this.props.login) {
            if(!this.props.login.login){
                this.props.login.status === "Incorrect UserName & Password" ? this.setState({u_err:true,p_err:true}) : 
                this.props.login.status === "Incorrect UserName" ? this.setState({u_err:true}) : this.setState({p_err:true})
            }
            else{
                this.props.navigation.navigate('Dashboard')
            }
        }
    }

    onChangeText = (text, label) => {
        this.setState({
            [label]: text,
            u_err:false,
            p_err:false
        })
    }

    onPress = () => {
        let data = {
            userName: this.state.userName,
            password: this.state.password
        }
        this.props.LoginAction(data)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <LoginComponent
                    onChangeText={(text, label) => this.onChangeText(text, label)}
                    userName={this.state.userName}
                    password={this.state.password}
                    u_err={this.state.u_err}
                    p_err={this.state.p_err}
                    onPress={() => this.onPress()}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('dataabcd', state)
    return {
        login: state.login
    }
}

const mapDispatchToProps = dispatch => ({
    LoginAction: data => dispatch(LoginAction(data))
})


export default (connect(mapStateToProps, mapDispatchToProps)(LoginContainer));