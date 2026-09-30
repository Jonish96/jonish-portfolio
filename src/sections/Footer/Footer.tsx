import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © {currentYear} Jonish Prajapati. Built with React & TypeScript.
        </p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
};

export default Footer;