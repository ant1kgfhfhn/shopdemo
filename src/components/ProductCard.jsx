import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <span className="product-arrow"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="product-meta">
        <div>
          <p className="eyebrow">{product.category}</p>
          <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
        </div>
        <div className="price">
          <span>€{product.price}</span>
          {product.oldPrice && <del>€{product.oldPrice}</del>}
        </div>
      </div>
    </article>
  );
}