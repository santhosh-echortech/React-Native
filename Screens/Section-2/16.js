import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"

function Greeting({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle1}>Greeting started with react native!</Text>
            <Text style={styles.textStyle2}>My name is Santhosh</Text>
            <Button
                title='Go To List Screen'
                onPress={() => navigation.navigate('ListScreen')}
            />
            <Button
                title='Go To Reusable Card Screen'
                onPress={() => navigation.navigate('ReusableCard')}
            />
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
        fontSize: 20
    }
})

export default Greeting