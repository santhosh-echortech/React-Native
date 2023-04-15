import React, { useState } from "react"
import { View, Text, TextInput } from 'react-native'

function TextScreen ()  {
    const [name, setName] = useState('')
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TextInput
                value={name}
                onChangeText={setName}
                style={{
                    width: '90%',
                    height: 50,
                    borderWidth: 1,
                    padding: 2
                }}
            />
            <Text style={{
                fontSize:24,
                width:'95%'
            }}>My Name Is {name}</Text>
        </View>
    )
}


export default TextScreen