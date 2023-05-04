import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import axios from '../../Api/axios'

const Authentication = (props) => {
    const [signedIn, setSignedIn] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })
    const handleAuth = async () => {
        setLoading(true)
        if (signedIn) {
            try {

            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                if (!userDetails.email || !userDetails.password) {
                    setLoading(false)
                    return
                }
               
                const response = await axios.post('/signup', {
                    email: userDetails.email,
                    password: userDetails.password
                })
                console.log(response?.data)
            } catch (error) {
                console.log(error?.response?.data, 'SIGN UP ERROR')
            }
        }
        setLoading(false)
    }

    return (
        <>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={styles.container}>
                <Text style={styles.pageTitle}>{!signedIn ? 'Sign Up' : 'Sign In'}</Text>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                    placeholder='Email'
                    value={userDetails.email}
                    onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
                />
                <TextInput
                    secureTextEntry
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                    placeholder='Password'
                    value={userDetails.password}
                    onChangeText={(text) => setUserDetails({ ...userDetails, password: text })}
                />
                <TouchableOpacity onPress={() =>  handleAuth()} activeOpacity={0.7} style={styles.button}>
                    {loading ? <ActivityIndicator size="large" color='white' /> : <Text style={styles.buttonText}>{!signedIn ? 'Sign Up' : 'Sign In'}</Text>}
                </TouchableOpacity>
                <Text onPress={() => setSignedIn(!signedIn)} style={styles.note}>{!signedIn ? 'Already Have An Account? Sign In Instead' : 'Dont Have An Account: Sign Up'}</Text>
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