import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet } from 'react-native'

function TextScreen() {
    const [name, setName] = useState('')
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={setName}
                style={styles.input}
            />
            <Text style={styles.textStyle}>My Name Is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        padding: 2
    },
    textStyle: {
        fontSize: 24,
        width: '90%'
    }
})

export default TextScreen