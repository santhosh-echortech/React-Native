import React, { useReducer } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'


const COLOR_INCREMENT = 10
const COLOR_DECREMENT = 10

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'RED':
            // if (state.red + action.amountToChange > 255 || state.red + action.amountToChange < 0) {
            //     return state
            // }
            // return {
            //     ...state, red: state.red + action.amountToChange
            // }
            return state.red + action.amountToChange > 255 || state.red + action.amountToChange < 0 ? state : { ...state, red: state.red + action.amountToChange }
        case 'GREEN':
            return state.green + action.amountToChange > 255 || state.green + action.amountToChange < 0 ? state : { ...state, green: state.green + action.amountToChange }
            // return {
            //     ...state, green: state.green + action.amountToChange
            // }
        case 'BLUE':
            return state.blue + action.amountToChange > 255 || state.blue + action.amountToChange < 0 ? state : { ...state, blue: state.blue + action.amountToChange }
            // return {
            //     ...state, blue: state.blue + action.amountToChange
            // }
        default:
            return state
    }
}
function ReducerScreen() {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
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
            <ColorCounter onIncrease={() => dispatch({ colorToChange: 'RED', amountToChange: COLOR_INCREMENT })} onDecrease={() => dispatch({ colorToChange: 'RED', amountToChange: -1 * COLOR_DECREMENT })} color='Red' />
            <ColorCounter onIncrease={() => dispatch({ colorToChange: 'GREEN', amountToChange: COLOR_INCREMENT })} onDecrease={() => dispatch({ colorToChange: 'GREEN', amountToChange: COLOR_INCREMENT })} color='Green ' />
            <ColorCounter onIncrease={() => dispatch({ colorToChange: 'BLUE', amountToChange: COLOR_INCREMENT })} onDecrease={() => dispatch({ colorToChange: 'BLUE', amountToChange: COLOR_INCREMENT })} color='Blue' />
            <View style={[styles.colorContainer, { backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }]} />
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
export default ReducerScreen