import React, { useContext } from "react"
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'


const ShowScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props?.route?.params?.item?.title}</Text>
            <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        color:'black'
    }
})

export default ShowScreen