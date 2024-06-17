/*-------------------------------------------------------------------
|  🐼 React FC Navigation
|
|  🐯 Purpose: TOP NAVIGATION BAR
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

export const Navigation = () => {
  return (
    <div className="border-b bg-slate-100">
      <nav className="container flex justify-between items-center">
        <div className="font-semibold">React Form Validator</div>
        <div className="flex items-center gap-4 text-lg">
          <a href="https://github.com/Shweyy123" target="_blank">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/swetharamasamy" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </div>
  )
}

