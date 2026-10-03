import { Minus, Plus, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartDrawer({ open, items, onClose, onUpdate, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-overlay ${open ? "is-open" : ""}`} onClick={onClose}>
      <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-head">
          <div>
            <p className="eyebrow">Your selection</p>
            <h2>Shopping bag</h2>
          </div>
          <button className="icon-btn" onClick={onClose}><X size={20} /></button>
        </div>
        <div className="cart-items">
          {!items.length ? (
            <div className="empty-cart">
              <p>Your bag is currently empty.</p>
              <Link to="/shop" className="btn btn-dark" onClick={onClose}>Continue shopping</Link>
            </div>
          ) : items.map((item) => (
            <div className="cart-item" key={`${item.id}-${item.size}`}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <div className="cart-item-top">
                  <div>
                    <p className="eyebrow">{item.category}</p>
                    <strong>{item.name}</strong>
                    <small>Size: {item.size}</small>
                  </div>
                  <button className="text-btn" onClick={() => onRemove(item.id, item.size)}><Trash2 size={15} /></button>
                </div>
                <div className="cart-item-bottom">
                  <div className="quantity">
                    <button onClick={() => onUpdate(item.id, item.size, item.quantity - 1)}><Minus size={13} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdate(item.id, item.size, item.quantity + 1)}><Plus size={13} /></button>
                  </div>
                  <span>€{item.price * item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!!items.length && (
          <div className="cart-footer">
            <div className="subtotal"><span>Subtotal</span><strong>€{subtotal}</strong></div>
            <p>Shipping and taxes calculated at checkout.</p>
            <Link to="/checkout" className="btn btn-dark btn-full" onClick={onClose}>Checkout</Link>
          </div>
        )}
      </aside>
    </div>
  );
}