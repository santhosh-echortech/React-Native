import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { Provider } from './Context/Context'
import Authentication from './Screens/Authentication/Authentication'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Authentication'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Authentication" component={Authentication} options={{ animation: 'slide_from_right' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    // <Provider>
      <App />
    // </Provider>
  )
}
