import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { initializeApp } from 'firebase/app'
import thunk from 'redux-thunk'
import reducers from './src/reducers'
import Router from './src/Router'

const App = () => {
  useEffect(() => {
    const config = {
      apiKey: "AIzaSyA_nlW7dHe-uRIh1ZBDN4I331s4Ev_7LQs",
      authDomain: "manager-d40f5.firebaseapp.com",
      databaseURL: "https://manager-d40f5.firebaseio.com",
      storageBucket: "manager-d40f5.appspot.com",
      messagingSenderId: '502780289803'
    }

    const app = initializeApp(config)

    // Clean up the Firebase app instance when the component is unmounted
    return () => {
      app.delete()
    }
  }, [])

  const store = createStore(reducers, {}, applyMiddleware(thunk))

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
