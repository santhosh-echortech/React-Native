import React, { useState } from "react"
import { View, Text, StyleSheet, Image, StatusBar, TextInput, ScrollView } from 'react-native'
import DummyData from "./DummyData"
import Search from '../Assets/Svg/Search.svg'

const Home = () => {
    const [search, setSearch] = useState('')
    const RestaurantCard = () => {
        return (
            <>
                <Text>Cost Effective</Text>
                <View style={styles.cardContainer}>
                    <Image
                        style={styles.cardImage}
                        source={{
                            uri: "https://picsum.photos/200/300.jpg"
                        }}
                    />
                    <Text>Joe's Pizza</Text>
                </View>
            </>
        )
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Text style={styles.title}>Restaurant App</Text>
            <View style={styles.searchContainer}>
                <View style={styles.searchIconConainer}>
                    <Image
                        style={styles.searchIcon}
                        source={require('../Assets/Png/Search.png')}
                    />
                </View>
                <TextInput
                    placeholder="Search"
                    value={search}
                    onChangeText={setSearch}
                    style={styles.textInput}
                    onEndEditing={() => { }}
                />
            </View>
            <RestaurantCard />
        </ScrollView>
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
        margin: '5%'
    },
    searchContainer: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    searchIconConainer: {
        width: '15%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchIcon: {
        width: 30,
        height: 30
    },
    textInput: {
        height: 50,
        width: '80%',
        paddingLeft: '4%',
        paddingRight: '4%',
        fontSize: 18
    },
    cardImage: {
        width: '100%',
        height: 200
    },
    cardContainer: {
        height: 300,
        width: 250,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 8,
        overflow: 'hidden'
    }
})

export default Home