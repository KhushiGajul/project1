import React from 'react'
import {Router, Route, Routes} from 'react-router-dom'
import Nav from './navbar'
import Main from './Mainpage'

const welcome_pg = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Nav/>}/>
      <Route path='a' element={<Main/>}/>
    </Routes>
    </>
  )
}

export default welcome_pg