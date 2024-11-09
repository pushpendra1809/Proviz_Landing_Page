import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer>
        <p>© 2024 AI Education Institute. All rights reserved.</p>
        <div className="footer-content">
                <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                <a href="/terms-of-service" className="footer-link">Terms of Service</a>
                <a href="/contact-us" className="footer-link">Contact Us</a>
            </div>
    </footer>
);

export default Footer;
