import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, Text, TextInput, TouchableOpacity } from 'react-native'

const Authentication = () => {
    const [signedIn, setSignedIn] = useState(false)
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })
    return (
        <>
            <StatusBar backgroundColor={'white'} />
            <View style={styles.container}>
                <Text style={styles.pageTitle}>{!signedIn ? 'Sign Up' : 'Sign In'}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={userDetails.email}
                    onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    value={userDetails.password}
                    onChangeText={(text) => setUserDetails({ ...userDetails, password: text })}
                />
                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.buttonText}>{!signedIn ? 'Sign Up' : 'Sign In'}</Text>
                </TouchableOpacity>
                <Text onPress={()=>setSignedIn(true)} style={styles.note}>{!signedIn ? 'Already Have An Account? Sign In Instead' : 'Dont Have An Account: Sign Up'}</Text>
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
    pageTitle: {
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold'
    },
    input: {
        height: 60,
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: '5%',
        marginBottom: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        fontSize: 20
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
    note: {
        width: '90%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Authentication