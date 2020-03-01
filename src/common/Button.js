import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

class CommonButton extends Component {

    render() {
        const { label, value } = this.props
        return (
            <Button mode="contained" style={styles.button} onPress={() => this.props.onPress()}>
                Login
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: '40%',
        marginTop: 20
    }
})

export default CommonButton;