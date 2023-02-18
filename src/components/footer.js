import React from 'react';
import "./footer.css"
import {FiInstagram } from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.instagram.com/"><FiInstagram/></a>
        <a href="https://twitter.com/"><AiOutlineTwitter/></a>
        <a href="https://www.linkedin.com/"><AiFillLinkedin/></a>
        <a href="https://www.facebook.com/"><FiFacebook/></a>
      </div>
      <div className="copy-right">
        <p>policy</p>
<p>contact us</p>
   </div>
    </footer>
  );
}

export default Footer;
