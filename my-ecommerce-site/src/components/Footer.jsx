import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-1">
        <a href="https://www.instagram.com/?hl=en">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com/?lang=en">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.tiktok.com/en/">
          <i className="fa-brands fa-tiktok"></i>
        </a>
        <a href="https://www.linkedin.com/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
      <div className="footer-2">
        <p>Copyright 2024 Corp Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
