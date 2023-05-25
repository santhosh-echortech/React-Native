import React from 'react'
import { View, Text, Picker } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import { CardSection, Input } from './common'

const EmployeeForm = ({ name, phone, shift, employeeUpdate }) => {
  const onNameChange = (value) => {
    employeeUpdate({ prop: 'name', value })
  }

  const onPhoneChange = (value) => {
    employeeUpdate({ prop: 'phone', value })
  }

  const onShiftChange = (value) => {
    employeeUpdate({ prop: 'shift', value })
  }

  return (
    <View>
      <CardSection>
        <Input
          label="Name"
          placeholder="Jane"
          value={name}
          onChangeText={onNameChange}
        />
      </CardSection>

      <CardSection>
        <Input
          label="Phone"
          placeholder="555-555-5555"
          value={phone}
          onChangeText={onPhoneChange}
        />
      </CardSection>

      <CardSection style={{ flexDirection: 'column' }}>
        <Text style={styles.pickerTextStyle}>Shift</Text>
        <Picker
          style={{ flex: 1 }}
          selectedValue={shift}
          onValueChange={onShiftChange}
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>
    </View>
  )
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm)
