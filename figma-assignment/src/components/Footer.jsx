function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>Elementum</h2>

          <p>
            Creating meaningful digital experiences
            with creativity, innovation and strategy.
          </p>
        </div>

        <div className="footer-links">

          <div>
            <h4>Company</h4>
            <p>Home</p>
            <p>Studio</p>
            <p>Services</p>
            <p>Blog</p>
          </div>

          <div>
            <h4>Terms</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Support</p>
          </div>

          <div>
            <h4>Social</h4>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>YouTube</p>
            <p>Twitter</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>hello@elementum.com</p>
            <p>+91 9876543210</p>
            <p>Bangalore, India</p>
          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Elementum. All Rights Reserved.
        </p>

        <button
          className="top-btn"
          onClick={scrollToTop}
        >
          ↑ Top
        </button>

      </div>

    </footer>
  );
}

export default Footer;