import React from 'react'
import {TextInput, StyleSheet} from 'react-native'

const Input = props => {
    return <TextInput {...props} style={{...style.input, ...props.style}}/>;
}

const style = StyleSheet.create({
    input: {
        height: 40,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;