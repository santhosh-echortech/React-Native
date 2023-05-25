import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common'


// const config = {
//   apiKey: "AIzaSyA_nlW7dHe-uRIh1ZBDN4I331s4Ev_7LQs",
//   authDomain: "manager-d40f5.firebaseapp.com",
//   databaseURL: "https://manager-d40f5.firebaseio.com",
//   storageBucket: "manager-d40f5.appspot.com",
//   messagingSenderId: '502780289803'
// }
const LoginForm = ({
  email,
  password,
  error,
  loading,
  emailChanged,
  passwordChanged,
  loginUser,
}) => {
  const onEmailChange = (text) => {
    emailChanged(text)
  }

  const onPasswordChange = (text) => {
    passwordChanged(text)
  }

  const onButtonPress = () => {
    loginUser({ email, password })
  }

  const renderButton = () => {
    if (loading) {
      return <Spinner size="large" />
    }

    return <Button onPress={onButtonPress}>Login</Button>
  }

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={onEmailChange}
          value={email}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={onPasswordChange}
          value={password}
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>{error}</Text>

      <CardSection>{renderButton()}</CardSection>
    </Card>
  )
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth

  return { email, password, error, loading }
}

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm)
