import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

const image1 = 'https://images.theconversation.com/files/305837/original/file-20191209-90562-nsnsun.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop'
const image2 = 'https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg'
const image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSwUxmnWqdedbyNvKFYzlJX1nenAlyyXHWz1uvct7ajNyExPgr_4G5EcJKHUKA6v2P3A&usqp=CAU'

function ReusableScreen() {
    const RenderReusableCard = ({ image, name }) => {
        return (
            <View style={styles.card}>
                <Image
                    style={styles.tinyImage}
                    source={{
                        uri: image
                    }}
                />
                <Text style={styles.textStyle}>{name}</Text>
            </View>
        )
    }
    return (
        <View>
            <RenderReusableCard image={image1} name='Forest' />
            <RenderReusableCard image={image2} name='Beach' />
            <RenderReusableCard image={image3} name='Mountain' />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        height: 100,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    tinyImage: {
        height: 80,
        width: 80,
        borderRadius: 10
    },
    textStyle: {
        width: '70%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default ReusableScreen