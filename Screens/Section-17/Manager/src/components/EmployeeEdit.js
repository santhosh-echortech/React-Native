import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import { Card, CardSection, Button, Confirm } from './common'

const EmployeeEdit = ({
  employee,
  name,
  phone,
  shift,
  employeeUpdate,
  employeeSave,
  employeeDelete,
}) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    _.each(employee, (value, prop) => {
      employeeUpdate({ prop, value })
    })
  }, [])

  const onButtonPress = () => {
    employeeSave({ name, phone, shift, uid: employee.uid })
  }

  const onTextPress = () => {
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  const onAccept = () => {
    const { uid } = employee
    employeeDelete({ uid })
  }

  const onDecline = () => {
    setShowModal(false)
  }

  return (
    <Card>
      <EmployeeForm />

      <CardSection>
        <Button onPress={onButtonPress}>Save Changes</Button>
      </CardSection>

      <CardSection>
        <Button onPress={onTextPress}>Text Schedule</Button>
      </CardSection>

      <CardSection>
        <Button onPress={() => setShowModal(!showModal)}>Fire Employee</Button>
      </CardSection>

      <Confirm visible={showModal} onAccept={onAccept} onDecline={onDecline}>
        Are you sure you want to delete this?
      </Confirm>
    </Card>
  )
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete,
})(EmployeeEdit)
