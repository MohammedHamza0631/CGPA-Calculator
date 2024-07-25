import React from 'react'
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { useSelector } from 'react-redux'
import getBarColor from '../utils/getBarColor'
import BorderBeam from './magicui/border-beam'
const Dashboard = () => {
  const semesters = useSelector(state => state.semester.semesters)
  const data = semesters.map((sem, index) => {
    return {
      semester: `Semester ${index + 1}`,
      cgpa: parseFloat(sem.cgpa),
      fill: getBarColor(sem.cgpa)
    }
  })
  const isNotAvailable = semesters[0].sgpa === '' && semesters[0].credits === ''
  if (isNotAvailable) {
    return (
      <div className='flex items-center justify-center mt-10'>
        <h1 style={{ color: '#ffffff' }}>No data available</h1>
      </div>
    )
  }
  return (
    <div className='flex items-center justify-center mt-10'>
      <div
        style={{
          backgroundColor: '#1e1e1e',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(25, 60, 25, 0.8)',
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <h1
          style={{
            color: '#ffffff',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          Dashboard
        </h1>

        <ResponsiveContainer width='100%' height={400}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' stroke='#444444' />
            <XAxis dataKey='semester' stroke='#ffffff' fill='#25caac' />
            <YAxis stroke='#ffffff' domain={[3, 10]} />
            <Tooltip
              contentStyle={{ backgroundColor: '#333333', border: 'none' }}
              itemStyle={{ color: '#ffffff' }}
            />
            <Legend />
            <Bar dataKey='cgpa' isAnimationActive={false}>
              {data.map((entry, index) => (
                <Bar key={`bar-${index}`} dataKey='cgpa' fill='#25caac' />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <BorderBeam size={250} duration={12} delay={9} />
      </div>
    </div>
  )
}

export default Dashboard
