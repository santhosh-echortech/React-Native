import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Authentication from './Screens/Authentication/Authentication'
import { Provider } from './Context/Context'
import { RootSiblingParent } from 'react-native-root-siblings'
import Footer from './Screens/Footer/Footer'

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
        <Stack.Screen name="Footer" component={Footer} options={{ animation: 'slide_from_right' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <RootSiblingParent>
      <Provider>
        <App />
      </Provider>
    </RootSiblingParent>

  )
}
