import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/color'

const Header = props => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color:'black',
        fontSize: 20,
        marginVertical: 10
    }
});

export default Header;