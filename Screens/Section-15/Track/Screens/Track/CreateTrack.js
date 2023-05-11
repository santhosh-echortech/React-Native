import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const locations = [
    { latitude: 37.78825, longitude: -122.4324 },
    { latitude: 37.7749, longitude: -122.4194 },
    { latitude: 37.7749, longitude: -122.408 },
    { latitude: 37.7834, longitude: -122.4342 },
]
//   AIzaSyClABlJVtbFtuLEIkEk1DTdpOw1AOK24mk
const CreateTrack = () => {
    const [location, setLocation] = useState(null)
    const handleButtonPress = () => {
        setLocation({ latitude: 37.78825, longitude: -122.4324 })
    }

    return (
        <View style={styles.container}>
            {/* <View style={{ flex: 1 }}> */}
            {/* <MapView style={{ flex: 1 }} region={location}
                
                >
                    {location && <Marker coordinate={location} />}
                </MapView> */}
            <MapView
                style={{ flex: 1, width: '100%', height: Dimensions.get('window').height * 0.50 }}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <TouchableOpacity onPress={() => handleButtonPress()} activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>Track Location</Text>
            </TouchableOpacity>
            {/* </View> */}
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
})

export default CreateTrack