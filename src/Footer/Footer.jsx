import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="social">
        <a href="/" className="logo">
          Edusanjal
        </a>
        <p className="brief">We are on social media</p>
        <div className="social-media">
          <a href="/" className="facebook">
            <FaFacebookF />
          </a>
          <a href="/" className="instagram">
            <FaInstagram />
          </a>
          <a href="/" className="twitter">
            <FaXTwitter />
          </a>
          <a href="/" className="linkdin">
            <FaLinkedinIn />
          </a>
          <a href="/" className="linkdin">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="information">
        <h3 className="heading">Information</h3>
        <ul className="list-items-footer">
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/faq">About Us</a>
          </li>
          <li>
            <a href="/faq">Our Team</a>
          </li>
          <li>
            <a href="/faq">Terms of use</a>
          </li>
        </ul>
      </div>
      <div className="links">
        <h3 className="heading">Links</h3>
        <ul className="list-items-footer">
          <li>
            <a href="/faq">Dashboard</a>
          </li>
          <li>
            <a href="/faq">Promote your College</a>
          </li>
          <li>
            <a href="/faq">Promote your School</a>
          </li>
          <li>
            <a href="/faq">Payment Method</a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h3 className="heading">Contact</h3>
        <ul className="list-items-footer">
          <li>
            <a href="/faq">Address</a>
          </li>
          <li>
            <a href="/faq">Phone</a>
          </li>
          <li>
            <a href="/faq">Email</a>
          </li>
          <li>
            <a href="/faq">Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
