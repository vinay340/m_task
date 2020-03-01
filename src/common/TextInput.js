import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

class CommonTextInput extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { label, value ,err} = this.props
        return (
            <TextInput
                label= {label}
                value={value}
                style={styles.textInput}
                error={err}
                onChangeText={text => this.props.onChangeText(text)}
            />
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        margin: 10
    }
})

export default CommonTextInput;