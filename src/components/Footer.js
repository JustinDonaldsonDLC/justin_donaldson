import React from 'react'
import linkedIn_logo from '../assets/LinkedIn_icon.svg.png';
import github_logo from '../assets/github.png';

function Footer() {
  return (
    <div style={{display: 'flex', width: '100%', backgroundColor: 'black', color: 'white', flexDirection: 'row'}}>
        <div style={{textAlign: 'center', width: '50%'}}>
            <h3>Contact Me</h3>
            <p>
                <a href="mailto:justin.donaldson@mohawkcollege.ca"> Email</a>
            </p>
            <p>
                <a href="tel:2894569065">(289) 456-9065</a>
            </p>
        </div>
        <div style={{textAlign: 'center', width: '50%'}}>
            <h3>Links</h3>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
                <a href="https://www.linkedin.com/in/justin-donaldson-dlc-ceo/"><img style={{width: '25px', height: '25px'}} src={linkedIn_logo} alt="linkedIn"/></a>
                <a  href="www.github.com/justindonaldsonDLC"><img style={{width: '25px', height: '25px', padding: '3px', backgroundColor: 'white', borderRadius: '50%', justifyContent: 'center', alignContent: 'center', textAlign: 'center'}} src={github_logo} alt="linkedIn"/></a>
            </div>
        </div>
    </div>            
  )
}

export default Footer