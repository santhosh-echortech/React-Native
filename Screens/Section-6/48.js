import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'


const COLOR_INCREMENT = 10
const COLOR_DECREMENT = 10

function ColorScreen() {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {

        switch (color) {
            case 'Red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                break
            case 'Green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                // if (color == 'Green') {
                //     if (green + change > 255 || green + change < 0) {
                //         return
                //     }
                //     else {
                //         setGreen(green + change)
                //     }
                // }
                break
            case 'Blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                break
            default:
                break
        }
    }

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
    // console.log(`rgb(${red},${green},${blue})`)
    return (
        <View style={styles.container}>
            <ColorCounter onIncrease={() => setColor('Red', COLOR_INCREMENT)} onDecrease={() => setColor('Red', -1 * COLOR_DECREMENT)} color='Red' />
            <ColorCounter onIncrease={() => setColor('Green', COLOR_INCREMENT)} onDecrease={() => setColor('Green', -1 * COLOR_DECREMENT)} color='Green ' />
            <ColorCounter onIncrease={() => setColor('Blue', COLOR_INCREMENT)} onDecrease={() => setColor('Blue', -1 * COLOR_DECREMENT)} color='Blue' />
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