import React from 'react'
import { Avatar, CardHeader } from '@mui/material';
import avatarPicture from '../../assets/profile_picture.png';
import logo from '../../assets/logo.png';
import '../../styles/header.scss'

const Header = () => {
  const title = 'Price & Promotions management'; 
  return(
    <CardHeader
      title={title}
      avatar={<Avatar src={avatarPicture}/>}
      action={<img src={logo}></img>}
    />
  )
}

export default Header;