import React from 'react'
import profile from '../assets/Justin.png'

function Header() {
  return (
    <div style={{display: 'flex',width: '100%', backgroundColor: 'black', flexDirection: 'row', justifyContent: 'center'}}>
      <div style={{display: 'flex', justifyContent: 'center', textAlign: 'left', flexDirection: 'column'}}>
        <h1 style={{color: 'white', margin: '0', padding: '10px', fontSize: '3rem'}}>Justin Donaldson</h1>
        <h2 style={{color: 'white', margin: '0', paddingLeft: '10px', paddingRight: '10px', paddingTop: '10px'}}>Digital Lift Consulting</h2>
        <h3 style={{color: 'white', margin: '0', paddingLeft: '10px', paddingRight: '10px'}}>Full Stack Web Developer</h3>
      </div>
      <div>
        <img src={profile} alt="Justin Donaldson" style={{width: '300px', height: '300px', borderRadius: '50%', margin: '10px', objectFit: 'cover'}} />
      </div>
    </div>
  )
}

export default Header