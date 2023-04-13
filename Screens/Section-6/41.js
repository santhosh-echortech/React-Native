import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

function Counter() {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <View style={styles.container}>
            <Text style={[styles.buttonText, { textAlign: 'center' }]}> Count :{count} </Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={increment}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={decrement}>
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

export default Counter
