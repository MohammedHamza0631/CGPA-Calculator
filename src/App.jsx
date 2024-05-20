import React, { useState, useCallback } from 'react'
import { Button, Input } from '@nextui-org/react'
import NavbarMenu from './components/NavbarMenu'
import { PlusIcon } from './components/PlusIcon'

function App () {
  const [semesters, setSemesters] = useState([
    { semester: '', sgpa: '', credits: '' }
  ])
  const [cgpa, setCgpa] = useState(null)

  const calculateCgpa = useCallback(() => {
    let totalCredits = 0
    let weightedGpaSum = 0
    semesters.forEach(({ credits, sgpa }) => {
      totalCredits += parseFloat(credits)
      weightedGpaSum += parseFloat(credits) * parseFloat(sgpa)
    })
    const computedCgpa = weightedGpaSum / totalCredits
    setCgpa(computedCgpa.toFixed(2))
  }, [semesters])

  const handleSemChange = (e, index) => {
    const { name, value } = e.target
    const newSemesters = semesters.map((sem, i) =>
      i === index ? { ...sem, [name]: value } : sem
    )
    setSemesters(newSemesters)
  }

  const handleAddSemester = () => {
    setSemesters([...semesters, { semester: '', sgpa: '', credits: '' }])
  }

  const handleSubmit = event => {
    event.preventDefault()
    calculateCgpa()
  }

  return (
    <div className='banner'>
      <div className=''>
        <NavbarMenu />
        <div className='main'>
          <h1 className='text-center font-semibold font-sans mb-5'>
            WHAT's MY CGPA!!
          </h1>
          <div className='flex items-center justify-center flex-col bg-primary-200'>
            <form onSubmit={handleSubmit}>
              <div id='Sem'>
                {semesters.map((sem, index) => (
                  <div
                    key={index}
                    className='flex w-full flex-wrap md:flex-nowrap gap-4'
                  >
                    <Input
                      isRequired
                      color='secondary'
                      name='semester'
                      size='lg'
                      type='text'
                      variant='bordered'
                      label={`Semester No.`}
                      value={sem.semester}
                      onChange={e => handleSemChange(e, index)}
                    />
                    <Input
                      isRequired
                      color='secondary'
                      size='lg'
                      name='sgpa'
                      step={0.01}
                      type='number'
                      variant='bordered'
                      label={`Semester G.P.A.`}
                      value={sem.sgpa}
                      onChange={e => handleSemChange(e, index)}
                    />
                    <Input
                      isRequired
                      color='secondary'
                      size='lg'
                      name='credits'
                      type='number'
                      variant='bordered'
                      label={`Semester Credits`}
                      value={sem.credits}
                      onChange={e => handleSemChange(e, index)}
                    />
                  </div>
                ))}
              </div>
              <Button
                color='secondary'
                variant='shadow'
                startContent={<PlusIcon />}
                className='mt-4'
                onClick={handleAddSemester}
              >
                Add Semester
              </Button>
              <Button
                type='submit'
                color='secondary'
                variant='shadow'
                className='mt-4'
              >
                Calculate CGPA
              </Button>
              <div className='text-secondary'>
                {cgpa && <h2>CGPA: {cgpa}</h2>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
