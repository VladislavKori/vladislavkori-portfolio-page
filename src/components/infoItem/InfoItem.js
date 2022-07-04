import React from 'react'
import './infoItem.css'

function InfoItem({title, text}) {
  return (
    <div className='info-block'>
      <h4 className='info-block__title'>{title}</h4>
      <p className='info-block__text'>{text}</p>
    </div>
  )
}

export default InfoItem