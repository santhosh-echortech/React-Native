import React, { useContext, useEffect } from "react"
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, StatusBar } from 'react-native'
import Context from "../Context/Context"
import Server from '../API/axios'

const Home = (props) => {
    const { blogList, setBlogList } = useContext(Context)

    useEffect(() => {
        (async () => {
            try {
                const response = await Server.get('/blogPosts')
                //console.log(response?.data, 'RESPONSE')
                setBlogList(response?.data)
            } catch (error) {
                console.log(error, '/blogPosts Listing Error')
            }
        })()
    }, [blogList])

    const handleDelete = async (id) => {
        await Server.delete(`/blogPosts/${id}`)
        // const newBlogPosts = blogList.filter((item) => item.id != id)
        // console.log(newBlogPosts)
        // setBlogList(newBlogPosts)
    }

    // const addBlogPosts = () => {
    //     setBlogList([...blogList, { id: Math.floor(Math.random() * 9999), title: `My Blog Post ${blogList.length + 1}` }])
    // }


    return (
        <>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={styles.container}>
                <Text style={styles.header}>Blog List</Text>
                {/* <TouchableOpacity onPress={addBlogPosts} activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.buttonText}>Add Posts</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => props.navigation.navigate('CreateBlogPost')} activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.buttonText}>Create Posts</Text>
                </TouchableOpacity>
                {blogList.length > 0 ? <FlatList
                    data={blogList}
                    keyExtractor={(_, index) => String(index)}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => props.navigation.navigate('ShowScreen', { item })} activeOpacity={0.7} style={styles.blogPost}>
                                <Text style={styles.title}>{item?.id}.{item?.title}</Text>
                                <TouchableOpacity onPress={() => handleDelete(item?.id)} activeOpacity={0.7}>
                                    <Text style={styles.delete}>Delete</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )
                    }}
                />
                    :
                    <Text style={styles.noData}>No BlogLists</Text>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: '5%',
        color: 'black'
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
        marginBottom: '1%'
    },
    title: {
        fontSize: 18,
        marginLeft: '5%',
        color: 'black',
        fontWeight: 'bold'
    },
    delete: {
        fontSize: 16,
        marginRight: '5%',
        color: 'black',
        fontWeight: 'bold'
    },
    button: {
        height: 45,
        width: '50%',
        alignSelf: 'center',
        backgroundColor: 'black',
        marginTop: '2%',
        marginBottom: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    noData: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: '10%'
    }
})

export default Home