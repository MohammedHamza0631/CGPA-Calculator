import React, { useState, useCallback, useEffect } from 'react'
import { Button, Input } from '@nextui-org/react'
import NavbarMenu from './components/NavbarMenu'
import { PlusIcon } from './components/PlusIcon'
import calcCGPA from './utils/calcCGPA'
import getCGPAColor from './utils/getCGPAColor'

function App () {
  const [semesters, setSemesters] = useState([
    { sgpa: '', credits: '', cgpa: '' }
  ])

  const handleSemChange = (e, index) => {
    const { name, value } = e.target
    const Allsemester = semesters.map((sem, i) =>
      i === index ? { ...sem, [name]: value } : sem
    )

    setSemesters(calcCGPA(Allsemester))
  }

  const handleAddSemester = () => {
    setSemesters([...semesters, { sgpa: '', credits: '', cgpa: '' }])
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
            <form>
              <div id='Sem'>
                {semesters.map((sem, index) => (
                  <div
                    key={index}
                    className='mt-4 flex w-full flex-wrap md:flex-nowrap gap-4'
                  >
                    <Input
                      isReadOnly
                      color='secondary'
                      name='semester'
                      size='lg'
                      type='text'
                      variant='bordered'
                      label={`Semester No.`}
                      value={index + 1}
                    />
                    <Input
                      isRequired
                      color='secondary'
                      size='lg'
                      name='sgpa'
                      step={0.01}
                      type='text'
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
                      type='text'
                      variant='bordered'
                      label={`Semester Credits`}
                      value={sem.credits}
                      onChange={e => handleSemChange(e, index)}
                    />
                    <Input
                      isReadOnly
                      size='lg'
                      name='cgpa'
                      type='number'
                      label={`C.G.P.A.`}
                      value={sem.cgpa}
                      color={getCGPAColor(parseFloat(sem.cgpa))}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
