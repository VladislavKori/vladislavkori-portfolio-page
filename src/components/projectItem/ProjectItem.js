import React from 'react'
import './projectItem.css'

import githubIcon from '../../assets/icons/Github.svg'

// components
import {ProjectButton} from '../imports'

function ProjectItem({preview, link, sourseLink }) {
  return (
    <li className='project__item'>
      
      <a className='project__item-preview' href={link}>
        <img src={preview} alt='preview' />
      </a>

      <div className='project__item-info'>
        <p><span>Name: </span>GPT3</p>
        <p><span>Stack: </span>ReactJS, Css, JSX</p>
      </div>

      <div className='project__item-btns'>
        <ProjectButton text="whatch" link={link} />
        <ProjectButton text="sourse" img={githubIcon} link={sourseLink} />
      </div>

    </li>
  )
}

export default ProjectItem