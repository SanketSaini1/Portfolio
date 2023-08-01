import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sanket</h1>


            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://www.instagram.com/sanket_saini._/" className="footer__social-link" target="_blank">
        <i class="uil uil-instagram-alt"></i>
        </a>
        <a href="" className="footer__social-link" target="_blank">
        <i class="uil uil-github-alt"></i>  
        </a>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7084930502809260032/" className="footer__social-link" target="_blank">
        <i class="uil uil-linkedin"></i></a> 
            </div>
            <span className='footer__copy'>
                &#169;Sanket Saini . All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer