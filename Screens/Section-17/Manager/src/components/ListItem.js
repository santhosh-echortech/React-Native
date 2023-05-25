import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from './common'

const ListItem = ({ employee }) => {
  const onRowPress = () => {
    Actions.employeeEdit({ employee })
  }

  const { name } = employee

  return (
    <TouchableWithoutFeedback onPress={onRowPress}>
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{name}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
}

export default ListItem
