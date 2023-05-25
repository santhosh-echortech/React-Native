import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { connect } from 'react-redux'
import * as actions from 'react-redux'
import { SelectLibrary } from '../Actions'

const ListItem = ({ item }) => {

    const renderDescription = (item) => {
        return (
            <Text>{item?.description}</Text>
        )
    }
    return (
        <TouchableOpacity onPress={() => {
            renderDescription(item)
        }} activeOpacity={0.7} style={styles.row}>
            <Text style={styles.title}>{item?.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        height: 50,
        width: '90%',
        alignSelf: 'center',
        marginBottom: 5,
        // alignItems:'center',
        justifyContent: 'center',
        borderBottomColor: '#A4A4A4',
        borderBottomWidth: 0.5
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
})

export default connect(null, actions)(ListItem)
