import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  User
} from '@nextui-org/react'

function About () {
  return (
    <div className='main center font-poppins'>
      <Card className='max-w-[400px]'>
        <CardHeader className='flex gap-3'>
          <img
            alt='app logo'
            height={40}
            src="https://images.unsplash.com/photo-1622519624366-1b06e2f2aa0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2tzfGVufDB8fDB8fHwy"
            width={40}
          />
          <div className='flex flex-col'>
            <p className='text-md'>About CGPA Calculator</p>
            <p className='text-small text-default-500'> -Mohammed Hamza</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            The CGPA Calculator is a simple and intuitive tool designed to help
            students calculate their Cumulative Grade Point Average (CGPA)
            accurately.
          </p>
          <p>
            By entering your SGPA and credits for each semester, you can get an
            instant calculation of your CGPA.
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <User
            name='Mohammed Hamza'
            description={
              <Link
                href='https://github.com/MohammedHamza0631'
                size='sm'
                isExternal
              >
                @hamza
              </Link>
            }
            avatarProps={{
              src: 'https://avatars.githubusercontent.com/u/91896151?v=4'
            }}
          />
        </CardFooter>
      </Card>
    </div>
  )
}

export default About
