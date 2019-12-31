import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import ToastExample from './ToastExample'

export default function GameExample() {
    const [userNumber, setUserNumber] = useState();
    const [numOfRounds, setNumOfRounds] = useState(0);

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
        setNumOfRounds(0);
    };
    const gameOverHandler = (numberOfRounds) => {
        setNumOfRounds(numberOfRounds);
    }
    const restartNewGameHandler = () => {
        setUserNumber(null);
        setNumOfRounds(0);
    }

    let content = <StartGameScreen onStartGame={startGameHandler}/>;
    if (userNumber && numOfRounds <= 0) {
        content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
    } else if (numOfRounds > 0) {
        content = <GameOverScreen rounds={numOfRounds} onRestart={restartNewGameHandler} />;
    }

    ToastExample.show('Toast shown!!', ToastExample.SHORT);
    
    return (
        <View style={styles.container}>
            <Header title="Guess a number" />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});