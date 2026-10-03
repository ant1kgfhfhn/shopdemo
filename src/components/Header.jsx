import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

function Header({ cartCount = 0 }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSearch = () => {
    closeMenu();
    navigate("/shop");
  };

  return (
    <header className="header">
      <div className="announcement">
        FREE SHIPPING ON ORDERS OVER €150
      </div>

      <div className="container">
        <div className="header-main">
          <Link to="/" className="logo" onClick={closeMenu}>
            ATELIER
          </Link>

          <nav className={`nav ${menuOpen ? "is-open" : ""}`}>
            <NavLink
              to="/"
              end
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              onClick={closeMenu}
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-btn"
              aria-label="Search"
              onClick={handleSearch}
            >
              <Search size={18} />
            </button>

            <Link
              to="/checkout"
              className="bag-btn"
              aria-label="Shopping bag"
              onClick={closeMenu}
            >
              <ShoppingBag size={18} />

              {cartCount > 0 && (
                <span>{cartCount}</span>
              )}
            </Link>

            <button
              type="button"
              className="icon-btn mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;