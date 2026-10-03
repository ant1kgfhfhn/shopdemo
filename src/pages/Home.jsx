import { ArrowDown, ArrowUpRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home({ onAdd }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=90" alt="ATELIER campaign" />
        </div>
        <div className="hero-content container">
          <p className="eyebrow">AUTUMN / WINTER 2026</p>
          <h1>Less, but<br /><em>better.</em></h1>
          <p className="hero-copy">A considered wardrobe of contemporary essentials, created with intention and designed to last beyond the season.</p>
          <Link to="/shop" className="btn btn-light">Shop the collection <ArrowUpRight size={18} /></Link>
        </div>
        <a href="#featured" className="hero-scroll"><ArrowDown size={18} /> Scroll to explore</a>
      </section>

      <section className="intro container section">
        <div>
          <p className="eyebrow">THE ATELIER EDIT</p>
          <h2>Objects for a<br /><em>well-lived</em> life.</h2>
        </div>
        <div className="intro-copy">
          <p>We believe good design is quiet. ATELIER brings together elevated everyday pieces with considered materials, responsible production and a focus on lasting form.</p>
          <Link to="/about" className="under-link">Discover our approach <MoveRight size={17} /></Link>
        </div>
      </section>

      <section id="featured" className="section">
        <div className="container section-head">
          <div><p className="eyebrow">CURATED FOR YOU</p><h2>New arrivals</h2></div>
          <Link to="/shop" className="under-link">View all <MoveRight size={17} /></Link>
        </div>
        <div className="container product-grid">
          {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
        </div>
      </section>

      <section className="split-feature">
        <div className="split-image"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=90" alt="ATELIER studio" /></div>
        <div className="split-copy">
          <p className="eyebrow">THE STUDIO</p>
          <h2>Designed in<br /><em>Berlin.</em></h2>
          <p>Our studio works at the intersection of fashion, interiors and everyday rituals. Every collection starts with a simple question: can this be made more considered?</p>
          <Link to="/about" className="btn btn-dark">Our story <ArrowUpRight size={18} /></Link>
        </div>
      </section>

      <section className="quote section container">
        <p className="eyebrow">A NOTE FROM THE STUDIO</p>
        <blockquote>“The things we live with should feel good today — and still feel right tomorrow.”</blockquote>
      </section>
    </main>
  );
}