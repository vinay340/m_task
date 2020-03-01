import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import CommonTextInput from '../common/TextInput'

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { userName, password, u_err, p_err } = this.props
        return (
            <View style={styles.container}>
                <Text style={{ alignSelf: 'center', fontSize: 24, margin: 20, marginBottom: 40 }}>Welcome</Text>

                <CommonTextInput
                    label={'UserName'}
                    onChangeText={(text) => this.props.onChangeText(text, 'userName')}
                    value={userName}
                    err={u_err}
                />
                <CommonTextInput
                    label={'Password'}
                    onChangeText={(text) => this.props.onChangeText(text, 'password')}
                    value={password}
                    err={p_err}
                />

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Button mode="contained" style={{ width: '40%', marginTop: 20 }} onPress={() => this.props.onPress()}>
                        Login
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        marginHorizontal: 20
    },
    textInput: {
        backgroundColor: '#fff',
        margin: 10
    }
})

export default LoginComponent;