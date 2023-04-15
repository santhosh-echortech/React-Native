import React, { useReducer } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'


const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 }
        case 'DECREMENT':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}
function ReducerCount() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <View style={styles.container}>
            <Text style={[styles.buttonText, { textAlign: 'center' }]}> Count :{state.count} </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => dispatch({ type: 'INCREMENT' })}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => dispatch({ type: 'DECREMENT' })} nPress={() => setCount(count - 1)}>
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignitems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: 'yellow',
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

export default ReducerCount
