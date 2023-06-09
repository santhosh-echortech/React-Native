import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Greeting from './Screens/Section-2/16'
import ListScreen from './Screens/Section-3/24'
import ReusableScreen from './Screens/Section-5/31'
import Counter from './Screens/Section-6/41'
import AddColor from './Screens/Section-6/44'
import ColorScreen from './Screens/Section-6/48'
import ReducerScreen from './Screens/Section-6/56'
import ReducerCount from './Screens/Section-6/61'
import TextScreen from './Screens/Section-6/62'
import PasswordScreen from './Screens/Section-6/67'
import LayoutScreen from './Screens/Section-7/81'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Greeting'
      // screenOptions={{
      //   headerShown:false
      // }}
      >
        <Stack.Screen name="Greeting" component={Greeting} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="ReusableCard" component={ReusableScreen} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="AddColor" component={AddColor} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="ReducerScreen" component={ReducerScreen} />
        <Stack.Screen name="ReducerCount" component={ReducerCount} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="LayoutScreen" component={LayoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App