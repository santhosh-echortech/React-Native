import React, { useContext } from "react"
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import Context from "../Context/Context"

const Home = () => {
    const {blogList,addBlogPosts} = useContext(Context)
    return (
        <View style={styles.container}>
            <Button
            title='Add Blog Posts'
            onPress={addBlogPosts}
            />
            <FlatList
                data={blogList}
                keyExtractor={(_, index) => String(index)}
                renderItem={({item})=>{
                    return(
                        <Text>{item?.title}</Text>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})

export default Home