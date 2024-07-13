import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from '@nextui-org/react'
import { NavLink } from 'react-router-dom'
function NavbarMenu () {
  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <p className='font-bold text-primary font-poppins'>
            <NavLink className='text-md lg:text-2xl italic' to='/'>
              CGPA Calculator
            </NavLink>
          </p>
        </NavbarBrand>
        <NavbarContent className=' sm:flex gap-4' justify='center'>
          <NavbarItem>
            <NavLink
              className='font-poppins font-semibold text-sm lg:text-lg italic hover:bg-slate-500 hover:rounded-lg p-2 transition-all duration-300'
              color='foreground'
              to='/about'
            >
              About
            </NavLink>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  )
}

export default NavbarMenu
