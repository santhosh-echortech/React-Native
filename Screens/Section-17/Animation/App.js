import React from 'react'
import { View, StatusBar } from "react-native"
import { Provider } from "react-redux"
import { createStore } from 'redux'
import reducers from './Screens'
import Header from './Components/Header'
import LibrariesList from './Components/LibrariesList'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Header title='Tech Stack' />
      <LibrariesList />
    </Provider>
  )
}

export default App

/*
const reducer = (state = [], action) => {
  if (action.type === 'splitString') {
    return action.payload.split('')
  }
  return state
}

const store = Redux.createStore(reducer)

store.getState()

const action = {
  type: 'splitString',
  payload: 'Santhosh'
}

store.dispatch(action)

store.getState()
*/
