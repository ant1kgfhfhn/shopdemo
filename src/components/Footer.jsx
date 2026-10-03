import { ArrowUpRight, Instagram, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo">ATELIER</div>
          <p>Contemporary essentials, thoughtfully designed and made for everyday life.</p>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={17} /></a>
            <a href="mailto:hello@atelier-store.com" aria-label="Email"><Mail size={17} /></a>
          </div>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <Link to="/shop">Shop all</Link>
          <Link to="/about">Our story</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <p className="footer-title">Customer care</p>
          <a href="#">Shipping & returns</a>
          <a href="#">Size guide</a>
          <a href="#">FAQ</a>
        </div>
        <div className="newsletter">
          <p className="footer-title">Private list</p>
          <p>New arrivals, studio notes and early access.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button aria-label="Subscribe"><ArrowUpRight size={19} /></button>
          </form>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 ATELIER. All rights reserved.</span>
        <span>Designed for modern living.</span>
      </div>
    </footer>
  );
}