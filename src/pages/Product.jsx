import { Check, Minus, Plus, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

export default function Product({ onAdd }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [size, setSize] = useState(product?.sizes?.[0] || "One Size");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <main className="page not-found"><h1>Product not found.</h1><Link to="/shop" className="under-link">Back to shop</Link></main>;

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) onAdd(product, size);
  };

  return (
    <main className="page">
      <div className="container product-detail">
        <Link to="/shop" className="back-link"><ArrowLeft size={16} /> Back to shop</Link>
        <div className="product-detail-grid">
          <div className="detail-gallery"><img src={product.image} alt={product.name} /></div>
          <div className="detail-info">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <div className="detail-price">€{product.price} {product.oldPrice && <del>€{product.oldPrice}</del>}</div>
            <p className="detail-description">{product.description}</p>
            <div className="detail-divider" />
            <div className="option-block">
              <div className="option-label"><span>Colour</span><strong>{product.colors[0]}</strong></div>
              <div className="swatches">{product.colors.map((color) => <button key={color} title={color} className="swatch">{color[0]}</button>)}</div>
            </div>
            <div className="option-block">
              <div className="option-label"><span>Size</span><Link to="/contact">Size guide</Link></div>
              <div className="sizes">{product.sizes.map((item) => <button key={item} className={size === item ? "selected" : ""} onClick={() => setSize(item)}>{item}</button>)}</div>
            </div>
            <div className="add-row">
              <div className="quantity large"><button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={15} /></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)}><Plus size={15} /></button></div>
              <button className="btn btn-dark add-button" onClick={handleAdd}>Add to bag — €{product.price * quantity}</button>
            </div>
            <div className="detail-notes"><div><Check size={17} /><span>Complimentary EU shipping over €150</span></div><div><Check size={17} /><span>Easy returns within 30 days</span></div><div><Check size={17} /><span>Designed with responsible materials</span></div></div>
            <div className="material"><strong>Materials</strong><p>{product.material}</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}