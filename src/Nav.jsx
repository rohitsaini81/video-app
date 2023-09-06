import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from './components/Cards'
// import Card from './components/Cards'
const logo = '/logo.jpg'
export default function Nav() {
  return (
    <div className='navbar'>
      <li><span className='logo_hw logo'><img src={logo} alt="Logo nhi h" /></span></li>
      <span className='RED logo'>NOKIA MOVIES</span>
      <Link to={'/'} className='logo'>Home</Link>
      <Link to={'/details'} className='logo'>Preview</Link>
    </div>
  )
}

 export function Home(props) {
      return (
        <div>Home Page
      <Card Data={props.rdata}/>
         
        </div>
      )
    
  
   
    
}
