import React, { useState } from 'react'
import { Input, Divider } from '@nextui-org/react'
function FormField ({ semester, sgpa, credits, cgpa }) {
  return (
    <div>
      <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
        <Input
          isRequired
          color='secondary'
          size='lg'
          type='number'
          variant='bordered'
          label={`${semester} Semester GPA`}
        />
        <Input
          isRequired
          color='secondary'
          size='lg'
          type='number'
          variant='bordered'
          label={`${semester} Semester Credits`}
        />
        <Input
          isReadOnly
          type='text'
          size='lg'
          label={`C.G.P.A`}
          color='secondary'
          variant='bordered'
          className='max-w-xs'
        />
      </div>
      <Divider className='my-4' />
    </div>
  )
}

export default FormField
