import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet } from 'react-native'

function PasswordScreen() {
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Enter Password:</Text>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={setPassword}
                style={styles.input}
            />
            {password.length < 5 && <Text style={styles.textStyle}>Password Should Be More Than 5 Characters</Text>}
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

export default PasswordScreen