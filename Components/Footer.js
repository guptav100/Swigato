// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/vishal-gupta-61238b169/"
        target="_blank"
        title="Linkedin Profile"
      >
        Vishal Gupta
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Swigato
        </strong>
    </div>
  );
};

export default Footer;
