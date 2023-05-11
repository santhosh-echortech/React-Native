import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = (props) => {

    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('token')
            if (token) {
                props.navigation.navigate('Footer')
            } else {
                props.navigation.navigate('Authentication')
            }
        })()
    }, [])

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Tracker App</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'
    },
})

export default SplashScreen