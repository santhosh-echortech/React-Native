import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

const LibrariesList = ({ libraries }) => {
    return (
        <FlatList
            data={libraries}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item }) => <ListItem item={item} />}
        />
    )
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
}


export default connect(mapStateToProps)(LibrariesList)