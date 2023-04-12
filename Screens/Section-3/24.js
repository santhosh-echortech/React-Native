import React from "react"
import { StyleSheet, FlatList, Text, View } from "react-native"

function ListScreen() {
    const dummyData = [
        { name: "1", age: "26" },
        { name: "2", age: "26" },
        { name: "3", age: "26" },
        { name: "4", age: "26" },
        { name: "5", age: "26" },
        { name: "6", age: "26" },
        { name: "7", age: "26" },
        { name: "8", age: "26" },
        { name: "9", age: "26" },
        { name: "10", age: "26" }
    ]

    return (
        <View>
            <FlatList
                data={dummyData}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.textStyle}>
                            Name {item.name} - Age={item.age}
                        </Text>
                    )
                }}
                keyExtractor={(_, index) => String(index)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        margin: 5,
        fontSize: 24,
        textAlign: 'center'
    }
})

export default ListScreen