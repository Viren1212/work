import React from 'react';
import '../styles.css';

/**
 * Footer Component
 * Institute info, links, and contact details
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-title">About SIET</h3>
              <p className="footer-text">
                State Institute of Engineering and Technology is a future-focused campus dedicated to high-quality technical education,
                applied research, and industry collaboration.
              </p>
              <div className="footer-social">
                <a href="#facebook" className="social-link" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#twitter" className="social-link" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <a href="#youtube" className="social-link" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#about">Director's Desk</a></li>
                <li><a href="#courses">Programs</a></li>
                <li><a href="#updates">Campus Updates</a></li>
                <li><a href="#notices">Notices</a></li>
                <li><a href="#placements">Placements</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Student Services</h3>
              <ul className="footer-links">
                <li><a href="#admissions">Admission Cell</a></li>
                <li><a href="#scholarships">Scholarships</a></li>
                <li><a href="#hostel">Hostel Office</a></li>
                <li><a href="#anti-ragging">Anti-Ragging Cell</a></li>
                <li><a href="#grievance">Grievance Support</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Contact</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">AD</span>
                  <div>
                    <p><strong>Address</strong></p>
                    <p>
                      SIET Campus, Sector 26, Knowledge Park
                      <br />
                      Panchkula, Haryana 160019, India
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">PH</span>
                  <div>
                    <p><strong>Phone</strong></p>
                    <p>+91-XXX-XXXXXXX</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">EM</span>
                  <div>
                    <p><strong>Email</strong></p>
                    <p>info@siet.edu.in</p>
                    <p>admissions@siet.edu.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} State Institute of Engineering and Technology. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#terms">Terms and Conditions</a>
              <span className="separator">|</span>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;