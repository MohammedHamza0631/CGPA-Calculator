import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input } from '@nextui-org/react'
import { PlusIcon } from './PlusIcon'
import calcCGPA from '../utils/calcCGPA'
import getCGPAColor from '../utils/getCGPAColor'
import { addSemester, setSemesters } from '../redux/slices/semester'

function Home () {
  const dispatch = useDispatch()
  const semesters = useSelector(state => state.semester.semesters)

  const validateNumber = value => value.match(/^\d+(\.\d{1,3})?$/)

  const handleSemChange = (e, index) => {
    const { name, value } = e.target
    const updatedSemesters = semesters.map((sem, i) =>
      i === index ? { ...sem, [name]: value } : sem
    )
    
    const newSemesters = calcCGPA(updatedSemesters)
    dispatch(setSemesters(newSemesters))
  }

  const handleAddSemester = () => {
    dispatch(addSemester({ sgpa: '', credits: '', cgpa: '' }))
  }

  return (
    <div className='main'>
      <h1 className='text-center font-poppins italic text-md lg:text-xl mb-5'>
        WHAT's MY CGPA!!
      </h1>
      <div className='flex items-center justify-center flex-col bg-primary-200 font-poppins'>
        <form>
          <div id='Sem'>
            {semesters.map((sem, index) => {
              const isSgpaInvalid = sem.sgpa && !validateNumber(sem.sgpa)
              const isCreditInvalid =
                sem.credits && !validateNumber(sem.credits)
              return (
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
                    errorMessage={
                      isSgpaInvalid && 'SGPA must be a valid number'
                    }
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
                    errorMessage={
                      isCreditInvalid && 'Credit must be a valid number'
                    }
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
              )
            })}
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
  )
}

export default Home
