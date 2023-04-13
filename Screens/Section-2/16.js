import React from "react"
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native"

function Greeting({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle1}>Greeting started with react native!</Text>
            <Text style={styles.textStyle2}>My name is Santhosh</Text>
            <Button
                title='Go To List Screen'
                onPress={() => navigation.navigate('ListScreen')}
            />
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate('ReusableCard')}>
                <Text style={styles.buttonText}>Go To Reusable Card Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate('Counter')}>
                <Text style={styles.buttonText}>Counter Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignitems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20,
        marginBottom:'5%'
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

export default Greeting