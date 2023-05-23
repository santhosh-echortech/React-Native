import React from 'react'
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

const LibrariesList = ({ libraries }) => {
    const renderLibraries = (item) => {
        return (
            <TouchableOpacity activeOpacity={0.7} style={styles.row}>
                <Text style={styles.title}>{item?.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            data={libraries}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => renderLibraries(item)}
        />
    )
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
}

const styles = StyleSheet.create({
    row: {
        height: 50,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 5,
        // alignItems:'center',
        justifyContent: 'center',
        borderBottomColor:'#A4A4A4',
        borderBottomWidth:0.5
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color:'black'
    },
})

export default connect(mapStateToProps)(LibrariesList)