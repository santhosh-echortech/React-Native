import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'


const COLOR_INCREMENT=10
const COLOR_DECREMENT=10

function ColorScreen() {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const ColorCounter = ({ color, onIncrease, onDecrease }) => {
        return (
            <>
                <Text style={{ textAlign: 'center', marginTop: '5%' }}>{color}</Text>
                <TouchableOpacity onPress={onIncrease} style={styles.button} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>{`More ${color}`}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDecrease} style={styles.button} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>{`Less ${color}`}</Text>
                </TouchableOpacity>
            </>
        )
    }
    console.log(`rgb(${red},${green},${blue})`)
    return (
        <View style={styles.container}>
            <ColorCounter onIncrease={() => setRed(red + COLOR_INCREMENT)} onDecrease={() => setRed(red - COLOR_DECREMENT)} color='Red' />
            <ColorCounter onIncrease={() => setGreen(green + COLOR_INCREMENT)} onDecrease={() => setGreen(green - COLOR_DECREMENT)} color='Green ' />
            <ColorCounter onIncrease={() => setBlue(blue + COLOR_INCREMENT)} onDecrease={() => setBlue(blue - COLOR_DECREMENT)} color='Blue' />
            <View style={[styles.colorContainer, { backgroundColor: `rgb(${red},${green},${blue})` }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    colorContainer: {
        height: 100,
        width: 100,
        marginTop: '5%'
    },
    button: {
        height: 50,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})
export default ColorScreen