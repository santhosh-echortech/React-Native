import React, { useContext } from "react"
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import Context from "../Context/Context"

const Home = (props) => {
    const { blogList, setBlogList, addBlogPosts } = useContext(Context)

    const handleDelete = (id) => {
        // const newBlogPosts = [...blogPosts]
        //const index =newBlogPosts.findIndex((item)=>console.log())
        const newBlogPosts = blogList.filter((item) => item.id != id)
        console.log(newBlogPosts)
        setBlogList(newBlogPosts)
    }

    return (
        <View style={styles.container}>
            <Button
                title='Add Blog Posts'
                onPress={addBlogPosts}
            />
            <FlatList
                data={blogList}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => props.navigation.navigate('ShowScreen', { item })} activeOpacity={0.7} style={styles.blogPost}>
                            <Text style={styles.title}>{item?.title} - {item?.id}</Text>
                            <TouchableOpacity onPress={() => handleDelete(item?.id)} activeOpacity={0.7}>
                                <Text style={styles.delete}>Delete</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blogPost: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        // borderRadius: 10,
        marginTop: '2%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        fontSize: 18,
        marginLeft: '5%',
        color: 'black'
    },
    delete: {
        fontSize: 16,
        marginRight: '5%',
        color: 'black'
    }
})

export default Home