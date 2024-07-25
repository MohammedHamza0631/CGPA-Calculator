import React from 'react'
import { useSelector } from 'react-redux'
const Dashboard = () => {
  const semesters = useSelector(state => state.semester.semesters)
  return (
    <div>
      {/*This is a Dashboard page
        This will display charts and other data visualizations for a semester
        that's why I am using redux to manage the state of semesters throughout the entire application */}
      <h1>Dashboard</h1>
      {/* Visualization logic goes here */}
      <pre>{JSON.stringify(semesters, null, 2)}</pre>
    </div>
  )
}

export default Dashboard
