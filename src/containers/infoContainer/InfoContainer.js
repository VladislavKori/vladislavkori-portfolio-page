import React from 'react'
import './infoContainer.css'

// Components
import { UserTitle, UserLinks, InfoItem } from '../../components/imports'

function InfoContainer() {
  return (
    <div className='info'>
      <UserTitle />
      <UserLinks />
      <InfoItem title="about me" text="My name is Vladislav, I am a frontend developer. I study, play sports and live in pleasure. Always glad to meet new people. I like working in teams because new people can teach me something new." />
      <InfoItem title="my stack" text="html, css, javascript, React, Next, Electron, scss, Typescript, Three JS, D3.JS" />
    </div>
  )
}

export default InfoContainer