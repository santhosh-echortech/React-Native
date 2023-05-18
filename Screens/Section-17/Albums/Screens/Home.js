import React, { useEffect, useState } from 'react'
import { View, StyleSheet, StatusBar, FlatList ,Linking} from 'react-native'
import Card from '../Components/Card'
import Header from '../Components/Header'

const DATA = [...Array(10).keys()].map((_, i) => {

    return {
        "moviePoster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNFxPrn1ZHSuCWVZ3h9Fp5jezaLHYRtgjgw&usqp=CAU",
        "artistPhoto": "https://nettv4u.com/imagine/08-08-2022/shiva-nagulu.jpg",
        "movieName": "Arjun Reddy",
        "singerName": 'Radhan',
        "musicDirectorPhoto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9LMqARYp0jgOuHpm10rPVrXxFH4M8LRkPQ&usqp=CAU"
    }
})


const Home = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        setAlbums(DATA)
    }, [])

    const openSpotifyInBrowser = () => {
        const spotifyUrl = 'https://open.spotify.com/'

        Linking.openURL(spotifyUrl)
            .catch((err) => console.error('An error occurred', err))
    }

    return (
        <>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={styles.container}>
                <Header title={'Albums'} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={albums}
                    keyExtractor={(_, index) => String(index)}
                    renderItem={({ item }) => {
                        return (
                            <Card
                                moviePoster={item.moviePoster}
                                artistPhoto={item.artistPhoto}
                                movieName={item.movieName}
                                singerName={item.singerName}
                                musicDirectorPhoto={item.musicDirectorPhoto}
                                handlePress={openSpotifyInBrowser}
                            />
                        )
                    }}
                />
            </View>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
})

export default Home