import React from 'react'

function About() {
  return (
    <div style={{backgroundColor: 'black', justifyContent: 'center', alignContent: 'center', color: 'white', padding: '30px'}}>
        <div style={{display: 'block', margin: '0', paddingInline: '20%'}}>
            
            {/* Summary */}
            <h2>About Me</h2>
            <p style={{textAlign: 'left'}}><i>"Find out what you like doing best, and get someone to pay you for doing it"</i></p>
            <p style={{textAlign: 'left'}}>After working for four years as a project manager in construction, I found I really enjoyed making software to help organize my documents. This is how I started learning about software development, using one of the most well known programming languages: Visual Basic.</p>
            <p style={{textAlign: 'left'}}>Encouraged by my spouse, I pursued my passion and enrolled in Mohawk College's software development program. In 2023, during a summer break, I pondered how I might enter the software development industry without any formal experience; I decided on starting my own busienss, Digital Lift Consulting.</p>
            <p style={{textAlign: 'left'}}>Since then I have worked on a number of projects with different scales from a simple html/css webpage, to a complex administrative CRM. With every new project my skills as a project manager and software developer grow exponentially. I embrace every opportunity to learn and try a new tool, technology or application.</p>
            <p style={{textAlign: 'left'}}>I am currently enrolled in Mohawk College's Software Development program, and I am excited to see where this journey takes me.</p>
        </div>
    </div>
  )
}

export default About