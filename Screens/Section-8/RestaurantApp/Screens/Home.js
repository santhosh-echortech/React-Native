import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image, StatusBar, TextInput, ScrollView, FlatList } from 'react-native'
import DummyData from "./DummyData"
import Search from '../Assets/Svg/Search.svg'
import axios from 'axios'

const Home = () => {
    const [search, setSearch] = useState('')
    const [newYork, setNewYork] = useState([])
    const [california, setCalifornia] = useState([])
    const [florida, setFlorida] = useState([])
    const [error, setError] = useState(false)

    const BreweryCard = ({ item, index }) => {
        return (
            <View style={styles.cardContainer}>
                <Text style={styles.brewName}>{item?.name}</Text>
                <Text style={styles.brewName}>{item?.brewery_type.toUpperCase()}</Text>
                <Text style={styles.brewName}><Text style={styles.heading}>City:</Text> {item?.city}</Text>
                <Text style={styles.brewName}><Text style={styles.heading}>State:</Text> {item?.state_province}</Text>
                <Text style={styles.brewName}><Text style={styles.heading}>Country:</Text> {item?.country}</Text>
                <Text style={styles.brewName}><Text style={styles.heading}>Phone</Text> {item?.phone}</Text>
                <Text style={styles.brewName}><Text style={styles.heading}>Street:</Text>{item?.street}</Text>
            </View>
        )
    }

    useEffect(() => {
        const stateName = ['new_york', 'california', 'florida'].map(item => item)
        axios.get('https://api.openbrewerydb.org/v1/breweries', {
            params: {
                by_state: 'new_york',
                per_page: 10
            }
        }).then((response) => {
            setNewYork(response?.data)
        }).catch((e) => {
            console.log(e)
            setError(true)
        })
        axios.get('https://api.openbrewerydb.org/v1/breweries', {
            params: {
                by_state: 'california',
                per_page: 10
            }
        }).then((response) => setCalifornia(response?.data)).catch((e) => {
            console.log(e)
            setError(true)
        })
        axios.get('https://api.openbrewerydb.org/v1/breweries', {
            params: {
                by_state: 'florida',
                per_page: 10
            }
        }).then((response) => setFlorida(response?.data)).catch((e) => {
            console.log(e)
            setError(true)
        })
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Text style={styles.title}>Brewery Listing App </Text>
            <View style={styles.searchContainer}>
                <View style={styles.searchIconConainer}>
                    <Image
                        style={styles.searchIcon}
                        source={require('../Assets/Png/Search.png')}
                    />
                </View>
                <TextInput
                    editable={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Search Using Brewery Types"
                    value={search}
                    onChangeText={setSearch}
                    style={styles.textInput}
                // onEndEditing={getBrewery}
                />
            </View>
            <Text style={{ marginLeft: '5%', marginTop: '4%' }}>No Search Functionality Yet!</Text>
            {error ?
                <Text style={styles.error}>Something Went Wrong!</Text>
                :
                <>
                    <Text style={styles.state}>New York</Text>
                    <View style={styles.flatListContainer}>
                        <FlatList
                            horizontal
                            data={newYork}
                            keyExtractor={(_, index) => String(index)}
                            renderItem={BreweryCard}
                        />
                    </View>
                    <Text style={styles.state}>California</Text>
                    <View style={styles.flatListContainer}>
                        <FlatList
                            horizontal
                            data={california}
                            keyExtractor={(_, index) => String(index)}
                            renderItem={BreweryCard}
                        />
                    </View>
                    <Text style={styles.state}>Florida</Text>
                    <View style={styles.flatListContainer}>
                        <FlatList
                            horizontal
                            data={florida}
                            keyExtractor={(_, index) => String(index)}
                            renderItem={BreweryCard}
                        />
                    </View>
                </>
            }
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
        margin: '5%',
        textAlign: 'center'
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
        // height: 300,
        width: 250,
        backgroundColor: '#0D0D0D',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 10,
        marginTop: '5%',
        padding: 5
    },
    state: {
        marginTop: '5%',
        marginLeft: '5%',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    brewName: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5
    },
    heading: {
        color: '#DE4839',
        fontSize: 20,
        fontWeight: 'bold'
    },
    flatListContainer: {
        width: '90%',
        alignSelf: 'center'
    },
    error: {
        textAlign: 'center',
        marginTop: '5%',
        fontSize: 20,
        color: 'black'
    },
})

export default Home