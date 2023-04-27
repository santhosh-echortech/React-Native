import React, { useContext } from "react"
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'


const ShowScreen = (props) => {
    console.log(props.route.params.item.title);
    return (
        <View style={styles.container}>
            <View>
                <Text syle={styles.title}>{props?.route?.params?.item?.title}</Text>
            </View>
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
    }
})

export default ShowScreen