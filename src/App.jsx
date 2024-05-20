import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from '@nextui-org/react'
import FormField from './components/FormField'
import NavbarMenu from './components/NavbarMenu'
import { PlusIcon } from './components/PlusIcon'

function App () {
  const [semesters, setSemesters] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  const [sgpa, setSgpa] = useState('')
  const [credits, setCredits] = useState('')
  const [cgpa, setCgpa] = useState('')

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
                {semesters.map(semester => (
                  <FormField
                    key={semester}
                    semester={semester}
                    sgpa={sgpa}
                    credits={credits}
                    cgpa={cgpa}
                  />
                ))}
              </div>
              {/* <Button
                color='secondary'
                variant='shadow'
                startContent={<PlusIcon />}
                onClick={handleClick}
              >
                Add Semester
              </Button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
