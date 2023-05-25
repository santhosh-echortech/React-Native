import _ from 'lodash'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ListView } from 'react-native'
import { employeesFetch } from '../actions'
import ListItem from './ListItem'

const EmployeeList = ({ employees, employeesFetch }) => {
  useEffect(() => {
    employeesFetch()
  }, [])

  const createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    return ds.cloneWithRows(employees)
  }

  const renderRow = (employee) => {
    return <ListItem employee={employee} />
  }

  return (
    <ListView
      enableEmptySections
      dataSource={createDataSource({ employees })}
      renderRow={renderRow}
    />
  )
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })

  return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
