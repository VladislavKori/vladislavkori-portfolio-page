import React from 'react'
import './userTitle.css'

import avatarImg from '../../assets/avatar.png'

function UserTitle() {
  return (
    <div className='user-title'>
      <div className='user-title__photo'>
        <img src={avatarImg} alt="user-photo" />
      </div>
      <h1 className='user-title__name'>vladislav kori</h1>
    </div>
  )
}

export default UserTitle