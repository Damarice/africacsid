import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>LINKS</h3>
          <ul>
            <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#about"><i className="fas fa-info-circle"></i> About Us</a></li>
            <li><a href="#news"><i className="fas fa-newspaper"></i> News</a></li>
            <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#downloads"><i className="fas fa-download"></i> Downloads</a></li>
            <li><a href="#events"><i className="fas fa-calendar"></i> Events</a></li>
            <li><a href="#resources"><i className="fas fa-book"></i> Resources</a></li>
            <li><a href="#partners"><i className="fas fa-handshake"></i> Partners</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CONNECT WITH US</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="contact-info">
            <p><i className="fas fa-phone"></i> +233 XXX XXX XXX</p>
            <p><i className="fas fa-envelope"></i> info@africacsid.org</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AfricaCSID Ghana Secretariat. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
