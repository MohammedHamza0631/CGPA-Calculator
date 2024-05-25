import React, { useState, useMemo } from 'react'
import { Button, Input } from '@nextui-org/react'
import NavbarMenu from './components/NavbarMenu'
import { PlusIcon } from './components/PlusIcon'
import calcCGPA from './utils/calcCGPA'
import getCGPAColor from './utils/getCGPAColor'

function App () {
  const [semesters, setSemesters] = useState([
    { sgpa: '', credits: '', cgpa: '' }
  ])

  const validateNumber = (value) => value.match(/^\d+(\.\d{1,3})?$/)
  const sgValue = semesters[semesters.length - 1].sgpa

  const isSgpaInvalid = useMemo(() => {
    if (sgValue === '') return false

    return validateNumber(sgValue) ? false : true
  }, [sgValue])

  const cValue = semesters[semesters.length - 1].credits
  const isCreditInvalid = useMemo(() => {
    if (cValue === '') return false

    return validateNumber(cValue) ? false : true
  }, [cValue])

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
          <h1 className='text-center font-poppins italic text-md lg:text-xl mb-5'>
            WHAT's MY CGPA!!
          </h1>
          <div className='flex items-center justify-center flex-col bg-primary-200 font-poppins'>
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
                      size='lg'
                      name='sgpa'
                      step={0.01}
                      type='text'
                      variant='bordered'
                      label={`Semester G.P.A.`}
                      isInvalid={isSgpaInvalid}
                      color={isSgpaInvalid ? 'danger' : 'secondary'}
                      errorMessage={isSgpaInvalid && 'SGPA must be a valid number'}
                      value={sem.sgpa}
                      onChange={e => handleSemChange(e, index)}
                    />
                    <Input
                      isRequired
                      size='lg'
                      name='credits'
                      type='text'
                      variant='bordered'
                      label={`Semester Credits`}
                      isInvalid={isCreditInvalid}
                      color={isCreditInvalid ? 'danger' : 'secondary'}
                      errorMessage={isCreditInvalid && 'Credit must be a valid number'}
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
