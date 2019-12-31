import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'

const GameOverScreen = props => {
    return <View style={styles.screen}>
        <Text>The Game is over!</Text>
        <Text>Number of rounds: {props.rounds}</Text>
        <Button title="NEW GAME" onPress={props.onRestart} />
    </View>;
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GameOverScreen;