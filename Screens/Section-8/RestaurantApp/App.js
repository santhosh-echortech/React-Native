
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import Restaurant from './Screens/restaurentScreen'
import SingleRestaurant from './Screens/singleRestaurant'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="restaurant" component={Restaurant} />
        <Stack.Screen name="singleRestaurant" component={SingleRestaurant} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
