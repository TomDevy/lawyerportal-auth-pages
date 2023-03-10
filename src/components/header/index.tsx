import React from 'react'
import { NavLink } from 'react-router-dom'
import { LOGO } from '../../assets/logos/logo'
import * as ROUTE from '../../constants/routes'
import { BtnPrimary, BtnSecondary } from '../button'
import './index.scss';

import './header.scss'

function Header() {
  const active = {
    borderBottom: '3px solid #0D294D',
    fontWeight: 'bold'
  }
  return (
    <header className='header'>
      <div className='con'>
        <div className='header-logo'>
          <img src={LOGO.LogoDark} alt="logo" />
        </div>
        <nav className='header-nav'>
          <div>
            <NavLink to={ROUTE.LANDING} style={({ isActive }) => isActive ? active : undefined}>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to={ROUTE.ABOUT}>
              About Us
            </NavLink>
          </div>
          <div>
            <NavLink to={ROUTE.POLICY}>
              Privacy Policy
            </NavLink>
          </div>
        </nav>
        <div className='header-btns'>
          <BtnSecondary>
            <NavLink to={ROUTE.LOGIN}>
              Login
            </NavLink>
          </BtnSecondary>
          <BtnPrimary>
            <NavLink to={ROUTE.SIGNUP}>
              SignUp
            </NavLink>
            </BtnPrimary>
        </div>
      </div>
    </header>
  )
}

export default Header