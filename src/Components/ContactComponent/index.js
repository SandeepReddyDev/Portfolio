// ContactSection.jsx
import React, { useRef } from "react";
import "./index.css";
import { FaLinkedin, FaInstagram, FaGithubSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c7o06qm",     //  EmailJS Service ID
        "template_xhclcl8",    //  EmailJS Template ID
        form.current,
        "qERNjb-WkeQJjNn-3"      //  EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1 className="headings">CONTACT</h1>
        <p>
          Open to full-time opportunities and freelance projects. Passionate
          about building interactive, responsive, and dynamic web experiences.
        </p>

        <div className="contact-details">
          <div>
            <h3>Address</h3>
            <p>Chennai-600100</p>
          </div>

          <div>
            <h3>Phone</h3>
            <p>+91 xxxxxx6358</p>
          </div>

          <div>
            <h3>Email</h3>
            <p>sandeepreddy2206@gmail.com</p>
          </div>
        </div>

        <div className="social-icons">
         <FaInstagram/>
         <FaGithubSquare/>
         <FaLinkedin/>               
          
        </div>
      </div>

      <div className="contact-form">
        <h2 className="headings">GET IN TOUCH</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <input type="text" name="user_phone" placeholder="Phone number" required />
          <textarea name="message" placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
