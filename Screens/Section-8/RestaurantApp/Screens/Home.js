import React from "react"
import { View, Text, StyleSheet, Image } from 'react-native'

const Home = () => {
    const RestaurantCard = () => {
        return (
            <>
                <Text>Cost Effective</Text>
                <View style={{
                    height: 300,
                    width: 350,
                    backgroundColor: 'yellow'
                }}>

                    <Image
                        style={{
                            width: '100%',
                            height: 200
                        }}
                        source={{
                            uri: 'https://example.com/images/restaurant1.jpg',
                        }}
                    />
                    <Text>Joe's Pizza</Text>
                </View>
            </>
        )
    }
    return (
        <View>
            <RestaurantCard />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Home