import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

function AddColor() {
    const [color, setColor] = useState([])
    const generaterandomColor = () => {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        return `rgb(${r},${g},${b})`
    }
    return (
        <View>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => {
                setColor([...color, generaterandomColor()])
            }}>
                <Text style={styles.buttonText}>Add Color </Text>
            </TouchableOpacity>
            {/* {color.map((item, index) => {
                return <View key={index} style={[styles.colorBox, { backgroundColor: item }]} />
            })} */}
            <FlatList
                style={styles.flatListContainer}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={color}
                numColumns={6}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item, index }) => {
                    return <View key={index} style={[styles.colorBox, { backgroundColor: item }]} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: 'yellow',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    colorBox: {
        height: 50,
        width: 50,
        margin: 5
    },
    flatListContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    }
})
export default AddColor