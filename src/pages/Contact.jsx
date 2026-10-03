import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <main className="page">
      <section className="contact-head container"><p className="eyebrow">GET IN TOUCH</p><h1>How can we<br /><em>help?</em></h1></section>
      <section className="container contact-grid">
        <div className="contact-info">
          <div><Mail size={20} /><div><span>Email</span><a href="mailto:hello@atelier-store.com">hello@atelier-store.com</a></div></div>
          <div><Phone size={20} /><div><span>Phone</span><a href="tel:+493012345678">+49 30 123 45 678</a></div></div>
          <div><MapPin size={20} /><div><span>Studio</span><p>Torstraße 120<br />10119 Berlin, Germany</p></div></div>
          <div className="contact-hours"><span>Customer care</span><p>Mon–Fri, 9:00–18:00 CET</p></div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>Full name<input required placeholder="Your name" /></label>
          <label>Email address<input required type="email" placeholder="you@example.com" /></label>
          <label>Subject<select defaultValue="Order"><option>Order</option><option>Product question</option><option>Returns</option><option>Press & collaborations</option><option>Other</option></select></label>
          <label>Message<textarea required rows="5" placeholder="How can we help?" /></label>
          {sent && <div className="success">Thank you — your message has been received.</div>}
          <button className="btn btn-dark" type="submit">Send message <ArrowUpRight size={18} /></button>
        </form>
      </section>
    </main>
  );
}