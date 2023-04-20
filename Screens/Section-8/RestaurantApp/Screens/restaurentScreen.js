import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image, StatusBar, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import DummyData from "./DummyData"


const Restaurant = (props) => {
    const [search, setSearch] = useState('')
    const [restauant, setRestaurant] = useState([])

    useEffect(() => {
        setRestaurant(DummyData)
    }, [])

    const RestaurantCard = ({ title, data }) => {
        return (
            <>
                <Text style={styles.type}>{title}</Text>
                <FlatList
                    horizontal
                    data={data}
                    keyExtractor={(_item, index) => String(index)}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => props.navigation.navigate('singleRestaurant', { data: item })} activeOpacity={0.7} key={index} style={styles.card}>
                                <Image
                                    source={{ uri: item?.image }}
                                    style={styles.image}
                                />
                                <Text style={styles.restaurantName}>{item?.name}</Text>
                                <Text style={styles.ratings}>Ratings - {'⭐'.repeat(item?.rating)}</Text>
                                <Text style={styles.review}>Review Count - {item?.review_count}{' '}reviews</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </>
        )
    }



    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={'#E5E4E2'} barStyle={'dark-content'} />
            <Text style={styles.title}>Restaurant Listing App </Text>
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
                    placeholder="Search "
                    value={search}
                    onChangeText={setSearch}
                    style={styles.textInput}
                // onEndEditing={getBrewery}
                />
            </View>
            <View style={styles.flatListContainer}>
                <RestaurantCard title='Cost Effective' data={restauant.filter((item => item?.price == "$"))} />
                <RestaurantCard title='Bit Pricer' data={restauant.filter((item => item?.price == "$$"))} />
                <RestaurantCard title='Big Spender' data={restauant.filter((item => item?.price == "$$$"))} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E4E2'
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
    flatListContainer: {
        width: '90%',
        alignSelf: 'center'
    },
    type: {
        fontSize: 18,
        marginTop: '4%',
        marginBottom: '4%',
        color: 'black',
        fontWeight: 'bold'
    },
    card: {
        width: 250,
        height: 250,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 10
    },
    image: {
        height: 150
    },
    restaurantName: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: '5%',
        color: 'black'
    },
    ratings: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: '5%'
    },
    review: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: '5%'
    },
})

export default Restaurant