import React from 'react'
import { FlatList,Text } from 'react-native'
import { connect } from 'react-redux'

const LibrariesList = ({ libraries }) => {
    const renderLibraries = (item) => {
        return (
            <Text>{item?.title}</Text>
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

export default connect(mapStateToProps)(LibrariesList)