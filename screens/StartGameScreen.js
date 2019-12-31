import React, { useState } from 'react'
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import Colors from '../constants/color'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = value => {
        setEnteredValue(value.replace(/[^0-9]/g, ''));
    };
    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };
    const confirmedHandler = () => {
        const selectedNumber = parseInt(enteredValue);
        if (!isValidNumber(selectedNumber)) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be inbetween 1 and 99',
                [{ text: 'Okey', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setSelectedNumber(selectedNumber);
        setConfirmed(true);
        setEnteredValue('');
    };

    let confirmedOutput;
    if (confirmed) {
        Keyboard.dismiss();
        confirmedOutput = <Card style={styles.summaryContainer}>
            <Text>You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={props.onStartGame.bind(this, selectedNumber)} />
        </Card>;
    }

    function isValidNumber(value) {
        if (isNaN(value) || value <= 0 || value > 99) {
            return false;
        }
        return true;
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <Text>Start a New Game!</Text>
                <Card style={styles.card}>
                    <Text style={styles.title}>Select a Number!</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrected={false}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <Button title="Reset" color={Colors.accent} onPress={resetInputHandler} />
                        <Button title="Confirm" color={Colors.primary} onPress={confirmedHandler} />
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    card: {
        width: 300,
        maxWidth: '80%',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    input: {
        width: '80%',
        textAlign: 'center',
        padding:10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 10
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;