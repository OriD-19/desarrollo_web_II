import React from 'react'
import { Outlet } from 'react-router'

const AboutPage = () => {
  return (
    <div>
        <h2>Yo soy about page</h2>
        <hr />
        <Outlet />
    </div>
  )
}

export default AboutPage