import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Context } from '../../Context/Context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Account = (props) => {
    const { userData, setUserData } = useContext(Context)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tracker App</Text>
            <Text style={styles.textStyle}>{userData?.email}</Text>
            <TouchableOpacity onPress={async () => {
                await AsyncStorage.clear()
                props.navigation.navigate('Authentication')
            }} activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
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
    button: {
        height: 60,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'black',
        marginTop: '5%',
        marginBottom: '5%',
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
    textStyle:{
        fontSize:30,
        marginTop:'10%',
        marginBottom:'10%',
        color:'black'
    },
})

export default Account