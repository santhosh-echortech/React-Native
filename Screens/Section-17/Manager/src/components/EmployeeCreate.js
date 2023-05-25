import React from 'react'
import { connect } from 'react-redux'
import { employeeUpdate, employeeCreate } from '../actions'
import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'

const EmployeeCreate = ({ name, phone, shift, employeeUpdate, employeeCreate }) => {
  const onButtonPress = () => {
    employeeCreate({ name, phone, shift: shift || 'Monday' })
  }

  return (
    <Card>
      <EmployeeForm
        name={name}
        phone={phone}
        shift={shift}
        employeeUpdate={employeeUpdate}
      />
      <CardSection>
        <Button onPress={onButtonPress}>Create</Button>
      </CardSection>
    </Card>
  )
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate,
})(EmployeeCreate)
