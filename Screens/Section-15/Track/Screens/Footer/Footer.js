import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home/Home'
import Account from '../Account/Account'
import Track from '../Track/Track'
import CreateTrack from '../Track/CreateTrack'

const Tab = createBottomTabNavigator()


export default function Footer() {


    return (
        <>
            <Tab.Navigator
                backBehavior='initialRoute'
                initialRouteName="Track"
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarIconStyle: { display: "none" },
                    tabBarLabelStyle: {
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        textAlignVertical: 'center',
                        fontSize: 20
                    },
                }}
            >
                <Tab.Screen name="Track" component={Track} />
                <Tab.Screen name="CreateTrack" component={CreateTrack} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>

        </>
    )
}

