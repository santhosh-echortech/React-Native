import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import Header from '../Components/Header'
import auth from '@react-native-firebase/auth'

const Home = () => {
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [signInLoader, setSignInLoader] = useState(false)
    const [logOutLoader, setLogOutLoader] = useState(false)
    const [loader, setLoader] = useState(false)
    console.log(user)

    const handleSignUp = () => {
        setLoader(true)
        auth()
            .createUserWithEmailAndPassword(userDetails.email.trim(), userDetails.password.trim())
            .then((userCredential) => {
                const user = userCredential.user
                setUser(user)
            })
            .catch((error) => {
                setErrorMessage(error.message)
                setUserDetails({})
                console.log('signUp Error', error.message)
            })
        setLoader(false)
    }

    const handleSignIn = () => {
        setSignInLoader(true)
        auth()
            .signInWithEmailAndPassword(userDetails.email.trim(), userDetails.password.trim())
            .then((userCredential) => {
                const user = userCredential.user
                setUser(user)
            })
            .catch((error) => {
                setErrorMessage(error.message)
                setUserDetails({})
                console.log('signIn Error', error.message)
            })
        setSignInLoader(false)
    }

    const handleSignOut = () => {
        auth()
            .signOut()
            .then(() => {
                setUser(null)
                setErrorMessage(null)
            })
            .catch((error) => {
                setErrorMessage(error.message)
            })
    }


    return (
        <>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Header title={'Authentication'} />
            <View style={styles.container}>
                {user?.email ?
                    <>
                        <Text style={styles.email}>{user?.email}</Text>
                        <TouchableOpacity onPress={!logOutLoader && handleSignOut} activeOpacity={0.7} style={styles.button}>
                            {logOutLoader ? <ActivityIndicator size="large" color="white" /> : <Text style={styles.buttonText}>Log Out</Text>}
                        </TouchableOpacity>
                    </>
                    :
                    <>
                        <Text style={styles.heading}>Email</Text>
                        <TextInput
                            placeholder='Email'
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={styles.input}
                            value={userDetails.email}
                            onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
                            onFocus={() => setErrorMessage(null)}
                        />
                        <Text style={styles.heading}>Password</Text>
                        <TextInput
                            placeholder='Password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={styles.input}
                            value={userDetails.password}
                            onChangeText={(text) => setUserDetails({ ...userDetails, password: text })}
                            onFocus={() => setErrorMessage(null)}
                        />
                        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={!loader && handleSignUp} activeOpacity={0.7} style={styles.button}>
                                {loader ? <ActivityIndicator size="large" color="white" /> : <Text style={styles.buttonText}>Sign Up</Text>}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={!loader && handleSignIn} activeOpacity={0.7} style={styles.button}>
                                {signInLoader ? <ActivityIndicator size="large" color="white" /> : <Text style={styles.buttonText}>Sign In</Text>}
                            </TouchableOpacity>
                        </View>
                    </>}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        //justifyContent: 'center'
    },
    heading: {
        marginLeft: '5%',
        marginTop: '5%',
        color: 'black',
        fontSize: 20,
        fontWeight: '500'
    },
    input: {
        width: '90%',
        backgroundColor: '#F5F5F5',
        height: 60,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: '2%',
        paddingLeft: '5%',
        paddingRight: '5%',
        color: 'black',
        fontSize: 16,
        // fontWeight:'300'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height: 65,
        alignSelf: 'center',
        marginTop: '10%'
    },
    button: {
        height: 60,
        width: '45%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    },
    errorMessage: {
        width: '80%',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: '10%',
        color: 'red'
    },
    email: {
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center',
        marginTop: '10%',
        marginBottom: '10%'
    }
})

export default Home