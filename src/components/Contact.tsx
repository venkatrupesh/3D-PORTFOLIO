import { MdArrowOutward, MdCopyright, MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          Let's <span>Connect</span>
        </h2>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat about backend development!
        </p>
        
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card-icon">
              <MdEmail />
            </div>
            <h4>Email</h4>
            <a href="mailto:rushirupesh578@gmail.com" data-cursor="disable" className="contact-link">
              rushirupesh578@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <MdPhone />
            </div>
            <h4>Phone</h4>
            <a href="tel:+919182094755" data-cursor="disable" className="contact-link">
              +91 91820 94755
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <FaGithub />
            </div>
            <h4>GitHub</h4>
            <a
              href="https://github.com/venkatrupesh"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-link"
            >
              @venkatrupesh <MdArrowOutward />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <FaLinkedin />
            </div>
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/koyyagura-venkata-rupesh-22ba0628a"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-link"
            >
              Connect with me <MdArrowOutward />
            </a>
          </div>
        </div>

        <div className="contact-footer">
          <p>
            Designed and Developed by <span>K. Venkata Rupesh</span>
          </p>
          <p className="contact-copyright">
            <MdCopyright /> 2026 All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
