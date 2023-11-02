import React from 'react'
import "./Footer.css"
import Logo from '../Logo/Logo'
import { ImLocation2 } from "react-icons/im";


const Footer = () => {
  return (
    <div className='footer_main'>
        <div className='footer_logo'>
            <Logo/>

        </div>
        <div className='footer_location'>
           <span><ImLocation2/></span> Jaipur
        </div>
        <div className='footer_credits'>
            @yashagarwal

        </div>
    </div>
  )
}

export default Footer