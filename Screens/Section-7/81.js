import React from "react"
import { View, StyleSheet } from 'react-native'

const LayoutScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.viewStyle,{backgroundColor:'yellow'}]} />
            <View style={[styles.viewStyle2,{backgroundColor:'red'}]} />
            <View style={[styles.viewStyle,{backgroundColor:'blue'}]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    viewStyle: {
        height: 100,
        width: 100
    },
    viewStyle2: {
        height: 100,
        width: 100,
        top:100
    }
})

export default LayoutScreen