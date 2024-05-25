import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from '@nextui-org/react'
function NavbarMenu () {
  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <p className='font-bold text-primary'>
            <Link href='/'>CGPA Calculator</Link>
            
          </p>
        </NavbarBrand>
        <NavbarContent className=' sm:flex gap-4' justify='center'>
          <NavbarItem>
            <Link color='foreground' href='#'>
              About
            </Link>
          </NavbarItem>
          
          
        </NavbarContent>
        
      </Navbar>
    </div>
  )
}

export default NavbarMenu
