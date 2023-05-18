import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, TextInput, Text, TouchableOpacity } from 'react-native'
import Header from '../Components/Header'

const Home = () => {
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })
    return (
        <>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Header title={'Authentication'} />
            <View style={styles.container}>
                <Text style={styles.heading}>Email</Text>
                <TextInput
                    placeholder='Email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                    value={userDetails.email}
                    onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
                />
                <Text style={styles.heading}>Password</Text>
                <TextInput
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input}
                    value={userDetails.password}
                    onChangeText={(text) => setUserDetails({ ...userDetails, password: text })}
                />
                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
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
    button: {
        height: 60,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        marginTop: '10%',
        marginBottom: '5%',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    },
})

export default Home