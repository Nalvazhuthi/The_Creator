import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../assets/svgs/exportIcons';

const Footer = () => {
    return (
        <div className="footer-container">
            <h2 className="footer-title">We are waiting for you to contact us</h2>
            <p className="footer-subtitle">
                You can write to us at any time and get an instant response.
            </p>

            <div className="email-form">
                <input type="email" placeholder="Enter your Email" />
                <button>Join</button>
            </div>

            <div className="footer-bottom">
                <span className="copyright">© Copywriting</span>
                <div className="footer-links">
                    <a href="#">Partners</a>
                    <a href="#">How we Work</a>
                    <a href="#">Review</a>
                    <a href="#">Charity</a>
                </div>
                <div className="footer-socials">
                    <a href="#"><FacebookIcon /></a>
                    <a href="#"><InstagramIcon /></a>
                    <a href="#"><LinkedinIcon /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
