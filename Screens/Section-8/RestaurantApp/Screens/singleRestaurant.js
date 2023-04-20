import React from "react"
import { View, Text, StyleSheet, ScrollView, StatusBar, Image } from 'react-native'

const SingleRestaurant = (props) => {
    console.log(props?.route?.params?.data);
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Image
                source={{ uri: props?.route?.params?.data?.image }}
                style={styles.image}
            />
            <Text style={styles.name}>{props?.route?.params?.data?.name}</Text>
            <Text style={styles.name}>Ratings - {'⭐'.repeat(props?.route?.params?.data?.rating)}</Text>
            <Text style={styles.name}>Review Count - {props?.route?.params?.data?.review_count}{' '}reviews</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        height: 250
    },
    name: {
        margin: '5%',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default SingleRestaurant