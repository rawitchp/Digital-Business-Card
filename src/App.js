import './App.css';
import React from 'react';
import Profile from './img/Profile.jpg'
import {FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaGithubSquare} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'


function App() {

  return (
    <div className='card-container'>
      <div className='img'>
        <img src={Profile} alt='' />
      </div>
      <header className='header'>
        <h2 className='name'>Rawitch Payakkawan</h2>
        <h4 className='role'>Frontend Developer</h4>
        <h4 className='website'>rawitchp.website</h4>
      </header>
      <div className='button-container'>
          <a href='https://mail.google.com/' target='_blank' rel='noreferrer'><button ><MdEmail size={18} className='email-icon'/>Email</button></a>
          <a href='https://www.linkedin.com/in/rawitch-payakkawan/' target='_blank' rel='noreferrer'><button><BsLinkedin size={18} className='linkedin-icon'/><div className='linkedin-text'>LinkedIn</div></button></a>
      </div>
      <main>
        <div className='about'>
          <h2 className='about-topic'>About</h2>
          <div className='about-info'>Minim nulla mollit dolor ut labore sit fugiat excepteur laboris tempor est proident. Esse et in laboris consequat aute id ea et laborum pariatur aute excepteur. Id est dolor quis aliquip nulla. Quis velit esse laboris deserunt ut consectetur aliqua amet.</div>
        </div>
        <div className='interest'>
          <h2 className='interest-topic'>Interests</h2>
          <div className='interest-info'>Amet ut duis labore pariatur tempor do proident minim sunt enim esse. Aliquip sint nisi non minim excepteur cillum sit veniam occaecat sint. Consectetur amet veniam cupidatat excepteur non nulla. Duis nulla ad dolore occaecat elit. Nulla eiusmod dolor nulla eu minim anim elit.</div>
        </div>
      </main>
      <footer>
        <div className='footer-container'>
          <div>
            <a href='https://www.google.co.th/' target='_blank' rel='noreferrer'><FaTwitterSquare size={45} className='icon'/></a>
            <a href='https://www.facebook.com/rawitch.payakkawan/' target='_blank' rel='noreferrer'><FaFacebookSquare size={45} className='icon'/></a>
            <a href='https://www.instagram.com/_mix.rw_/' target='_blank' rel='noreferrer'><FaInstagramSquare size={45}className='icon'/></a>
            <a href='https://github.com/rawitchp' target='_blank' rel='noreferrer'><FaGithubSquare size={45} className='icon'/></a>
          </div>
          
        </div>
      </footer>
      
    </div>
      
  );

}

export default App;
