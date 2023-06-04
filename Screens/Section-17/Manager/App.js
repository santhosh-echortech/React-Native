import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import Employee from './Screens/Employee'

const Stack = createNativeStackNavigator()

const App = () => {
    const config = { animation: 'slide_from_right' }
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Employee'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home} options={config} />
                <Stack.Screen name="Employee" component={Employee} options={config} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default () => {
    return (
        <App />
    )
}
