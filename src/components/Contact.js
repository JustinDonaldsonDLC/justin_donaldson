import React from 'react'

function Contact() {
  return (
    <div style={{display: 'flex', width: '100%', justifyContent: 'space-around', position: 'fixed', top: '0px', right: '0px', left: '0px', zIndex: 1000, minHeight:'40px', backgroundColor: 'rgb(55,55,55)'}}>
        <div style={{display: 'flex', float: 'inline-end'}}>
            <p>(289) 456-9065</p>
        </div>
    </div>
  )
}

export default Contact