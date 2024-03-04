import React from 'react'
import privateAutologo from '../assets/PrivateAutoParts.png';
import headoflake from '../assets/hotlhs.png'
import { useState } from 'react';

function Projects() {

  return (
    <div style={{}}>
        <h2>Portfolio</h2>
        <div style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10}}>
            <div style={{width: '450px'}}>
                <h3>PrivateAutoParts.com</h3>
                <a href={"https://privateautoparts.com"}>
                    <img src={privateAutologo} alt="privateautoparts.com" style={{width: '300px', height: '150px', borderRadius: '5%', margin: '10px'}} />
                </a>
                <div style={{width: '100%', borderTop: '1px solid black'}}></div>
                <p>"<i>I recently had the pleasure of working with Justin from Digital Lift Consulting on a website I had imagined years ago. He was able to take all the details and goals I set out, and blew away my expectations.</i>"</p>
                <h4>- Andrew Dixon</h4>
                <div style={{width: '100%', borderTop: '1px solid black'}}></div>
                <h4> Built Using</h4>
                <ul id='list' style={{textAlign: 'left'}}>
                    <li>React</li>
                    <li>Node JS</li>
                    <li>Supabase</li>
                    <li>Express</li>
                    <li>Stripe</li>
                </ul>
            </div>
            <div style={{width: '450px'}}>
                <h3>The Head of the Lake Historical Society</h3>
                <a href={"http://www.headofthelake.ca/"}>
                    <img src={headoflake} alt="Head of the Lake Historical Society" style={{width: '300px', height: '150px', borderRadius: '5%', margin: '10px'}} />
                </a>
                <div style={{width: '100%', borderTop: '1px solid black'}}></div>
                <div id="testimonial">
                    <p>"<i>To whom it may concern:</i></p>
                    <p><i>At a time when the Society was eager to renew an again and uninspired website, Justin Donaldson, of Digital Lift Consulting, was highly recommended for the task. Justin was able to work with a committee of various talents and experience and explain his vision clearly and in deference to all.</i></p>
                    <p><i>We are extremely pleased with our new site and are proud to display the signature of Digital Lift Consulting at the bottom of our page. The Head-of-the-Lake Historical Society would not hesitate to recommend Justin Donaldson to any organization with similar objectives.</i>"</p>
                    <h4>- Terry Watson</h4>
                </div>
                <div style={{width: '100%', borderTop: '1px solid black'}}></div>
                <h4> Built Using</h4>
                <ul id='list' style={{textAlign: 'left'}}>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Projects