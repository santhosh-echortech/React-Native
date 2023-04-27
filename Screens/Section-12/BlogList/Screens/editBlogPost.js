import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import Context from '../Context/Context'

const EditBlogPost = (props) => {
    const { blogList, setBlogList } = useContext(Context)
    const [title, setTitle] = useState(props?.route?.params?.item?.title)
    const [description, setDescription] = useState(props?.route?.params?.item?.description)
    const handleSave=()=>{
        setBlogList([{...blogList,title:title,description:description}])
        props.navigation.navigate('Home')
    }

    return (
        <>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={styles.container}>
                <Text style={styles.header}>Edit Blog List</Text>
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
                    <Text style={styles.buttonText}>Save Edited Blog Post</Text>
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
    },
    heading: {
        marginLeft: '5%',
        color: 'black',
        marginBottom: '2%',
        fontSize: 18,
        marginTop: '5%'
    },
});

export default EditBlogPost
