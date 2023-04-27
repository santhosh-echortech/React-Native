import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from './Context/Context'
import Home from './Screens/Home'
import ShowScreen from './Screens/ShowScreen'
import CreateBlogPost from './Screens/createBlogPost'
import EditBlogPost from './Screens/editBlogPost'

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
        <Stack.Screen name="Home" component={Home} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="ShowScreen" component={ShowScreen} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="CreateBlogPost" component={CreateBlogPost} options={{ animation: 'slide_from_right' }} />
        <Stack.Screen name="EditBlogPost" component={EditBlogPost} options={{ animation: 'slide_from_right' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}


