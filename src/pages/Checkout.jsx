import { ArrowLeft, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Checkout({ cart }) {
  const [placed, setPlaced] = useState(false);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 8;
  const total = subtotal + shipping;

  if (placed) {
    return <main className="page order-success"><div className="container"><p className="eyebrow">ORDER CONFIRMED</p><h1>Thank you for<br /><em>shopping ATELIER.</em></h1><p>Your order has been received. A confirmation email would be sent to you in a real checkout flow.</p><Link to="/shop" className="btn btn-dark">Continue shopping</Link></div></main>;
  }

  return (
    <main className="page">
      <div className="container checkout">
        <div className="checkout-head"><Link to="/shop" className="back-link"><ArrowLeft size={16} /> Continue shopping</Link><div><Lock size={15} /> Secure checkout</div></div>
        <div className="checkout-grid">
          <form className="checkout-form" onSubmit={(e) => { e.preventDefault(); setPlaced(true); }}>
            <p className="eyebrow">CHECKOUT</p>
            <h1>Complete your order.</h1>
            <div className="form-section"><h3>Contact</h3><div className="two-col"><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Phone<input required placeholder="+49 ..." /></label></div></div>
            <div className="form-section"><h3>Shipping address</h3><label>Full name<input required /></label><label>Address<input required /></label><div className="two-col"><label>Postal code<input required /></label><label>City<input required /></label></div><label>Country<select defaultValue="Germany"><option>Germany</option><option>Austria</option><option>France</option><option>Netherlands</option></select></label></div>
            <div className="form-section"><h3>Payment</h3><label>Card number<input required placeholder="0000 0000 0000 0000" /></label><div className="two-col"><label>Expiry<input required placeholder="MM / YY" /></label><label>CVC<input required placeholder="123" /></label></div></div>
            <button className="btn btn-dark btn-full" type="submit">Place order — €{total}</button>
          </form>
          <aside className="order-summary"><p className="eyebrow">YOUR ORDER</p><h2>Summary</h2>{cart.length ? cart.map((item) => <div className="summary-item" key={`${item.id}-${item.size}`}><img src={item.image} alt="" /><div><strong>{item.name}</strong><span>{item.size} × {item.quantity}</span></div><b>€{item.price * item.quantity}</b></div>) : <p>Your bag is empty. <Link to="/shop">Shop the collection.</Link></p>}<div className="summary-lines"><div><span>Subtotal</span><b>€{subtotal}</b></div><div><span>Shipping</span><b>{shipping ? `€${shipping}` : "Free"}</b></div><div className="total"><span>Total</span><b>€{total}</b></div></div></aside>
        </div>
      </div>
    </main>
  );
}