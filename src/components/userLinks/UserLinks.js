import React from 'react'
import './userLinks.css'

// Config
import { links } from '../../configuration/config'

function UserLinks() {
  return (
    <div className='user-links'>
        <ul className='user-links__list'>
          {links.map((link, index) => (
          <li key={index} className='user-links__item'>
            <a className='user-links__link' href={link.link}>
              <img className='user-links__icon' src={link.icon} alt={link.name} />
            </a>
          </li>
          ))}
        </ul>
    </div>
  )
}

export default UserLinks