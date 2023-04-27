import React, { useContext } from "react"
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, StatusBar } from 'react-native'


const ShowScreen = (props) => {
    return (
        <>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={styles.container}>
                <Text style={styles.title}>{props?.route?.params?.item?.title}</Text>
                <Text style={styles.description}>{props?.route?.params?.item?.description}</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('EditBlogPost', { item: props?.route?.params?.item })} activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: '5%',
        marginBottom: '5%'
    },
    description: {
        width: '90%',
        alignSelf: 'center',
        lineHeight: 20,
        color: 'black'
    },
    button: {
        height: 45,
        width: '50%',
        alignSelf: 'center',
        backgroundColor: 'black',
        marginTop: '5%',
        marginBottom: '1%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default ShowScreen