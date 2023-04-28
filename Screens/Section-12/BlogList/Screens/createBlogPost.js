import React, { useContext, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Context from '../Context/Context'
import Server from '../API/axios'

const CreateBlogPost = (props) => {
    const { blogList, setBlogList } = useContext(Context)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSave = async () => {
        if (!title || !description) {
            return
        }
        try {
            const newBlogPost = await Server.post('/blogPosts', {
                title: title,
                description: description
            })
           
            setBlogList([...blogList, newBlogPost])
            props.navigation.navigate('Home')
        } catch (error) {
            console.log(error, 'Error While POST BlogPost')
        }

        // setBlogList([{ ...blogList, title: title, description: description }])
        // props.navigation.navigate('Home')
    }
    return (
        <>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={styles.container}>
                <Text style={styles.header}>Create Blog List</Text>
                <Text style={styles.heading}>Title</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                />
                <Text style={styles.heading}>Description</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={setDescription}
                />
                <TouchableOpacity onPress={handleSave} activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
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
    input: {
        height: 50,
        width: '90%',
        borderRadius: 8,
        borderColor: '#EEEEEE',
        borderWidth: 1,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    heading: {
        marginLeft: '5%',
        color: 'black',
        marginBottom: '2%',
        fontSize: 18,
        marginTop: '5%'
    },
    button: {
        height: 45,
        width: '50%',
        alignSelf: 'center',
        backgroundColor: 'black',
        marginTop: '5%',
        marginBottom: '1%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default CreateBlogPost
