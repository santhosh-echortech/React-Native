import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home/Home'


const Tab = createBottomTabNavigator()


export default function Footer() {


    return (
        <>
            <Tab.Navigator
                backBehavior='initialRoute'
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                }}
            >
                 <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>

        </>
    )
}

