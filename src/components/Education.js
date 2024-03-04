import React from 'react'

function Education() {
  return (
    <div style={{backgroundColor: 'black', justifyContent: 'center', alignContent: 'center', color: 'white', padding: '30px'}}>
        <div style={{display: 'block', margin: '0', paddingInline: '20%'}}>
            <h2>Education</h2>
            <div style={{textAlign: 'left'}}>
                <h3 style={{margin:'0px'}}>Advanced Diploma - Software Development</h3>
                <h4 style={{marginTop: '2px', padding: 0}}>Mohawk College, 2022 - 2025</h4>
            </div>
            <div style={{textAlign: 'left'}}>
                <h3 style={{margin:'0px'}}>Graduates Certificate - Project Management</h3>
                <h4 style={{marginTop: '2px', padding: 0}}>Durham College, 2015 - 2016</h4>
            </div>
            <div style={{textAlign: 'left'}}>
                <h3 style={{margin:'0px'}}>Bachelor of Arts (Hons.) - Communications: Commerce & Marketing</h3>
                <h4 style={{marginTop: '2px', padding: 0}}>University of Ontario: Institute of Technology, 2010 - 2014</h4>
            </div>
        </div>
    </div>
  )
}

export default Education