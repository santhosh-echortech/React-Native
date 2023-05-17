import React from 'react'
import { StyleSheet, View, Text, Image, Touchable, TouchableOpacity } from 'react-native'

const Card = ({ moviePoster, artistPhoto, movieName, singerName, musicDirectorPhoto }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image source={{ uri: musicDirectorPhoto }} style={styles.musicDirectorPhoto} />
                <View style={{ marginLeft: '5%' }}>
                    <Text style={styles.movieName}>{movieName}</Text>
                    <Text style={styles.singerName}>{singerName}</Text>
                </View>
            </View>
            <Image source={{ uri: moviePoster }} style={styles.moviePoster} />
            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: '2%',
        marginBottom: '2%',
    },
    cardHeader: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
    },
    musicDirectorPhoto: {
        height: 50,
        width: 50
    },
    movieName: {
        fontSize: 18,
        fontWeight: '500',
    },
    moviePoster: {
        height: 200,
        width: '100%'
    },
    button: {
        height: 40,
        backgroundColor: 'black',
        width:100,
        alignItems:'center',
        justifyContent: 'center',
        color:'white',
        marginTop:'5%',
        alignSelf:'flex-end'
    },
    buttonText: {
        color:'white'
    },
})

export default Card