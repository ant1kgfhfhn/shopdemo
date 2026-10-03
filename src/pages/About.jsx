import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="page">
      <section className="about-hero">
        <div className="container"><p className="eyebrow">OUR STORY</p><h1>Quiet design.<br /><em>Clear purpose.</em></h1></div>
      </section>
      <section className="about-image"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90" alt="ATELIER collection" /></section>
      <section className="container about-text section">
        <p className="eyebrow">WHY ATELIER</p>
        <div><h2>We make fewer things,<br /><em>more thoughtfully.</em></h2><p>ATELIER was founded around a simple idea: modern wardrobes do not need more noise. They need better foundations. We create refined pieces that can move between seasons, occasions and years without asking for attention.</p><p>From the first sketch to the final stitch, we look for the balance between function and form. Our materials are selected for feel, longevity and lower impact wherever possible.</p></div>
      </section>
      <section className="values container">
        <article><span>01</span><h3>Considered</h3><p>Every proportion, fabric and detail has a reason to be there.</p></article>
        <article><span>02</span><h3>Responsible</h3><p>We prioritize recycled, organic and traceable materials across our collections.</p></article>
        <article><span>03</span><h3>Lasting</h3><p>We design outside the cycle of trends, making pieces to live with.</p></article>
      </section>
      <section className="about-cta container">
        <h2>Find your everyday<br /><em>essentials.</em></h2>
        <Link to="/shop" className="btn btn-dark">Explore the collection <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
}