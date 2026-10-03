import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const categories = ["All", "Women", "Men", "Accessories"];

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );

  const [sort, setSort] = useState("featured");

  const handleSearch = (event) => {
    const value = event.target.value;

    setQuery(value);

    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    setSearchParams(params, { replace: true });
  };

  const handleCategory = (value) => {
    setCategory(value);

    const params = new URLSearchParams(searchParams);

    if (value === "All") {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    setSearchParams(params, { replace: true });
  };

  const clearSearch = () => {
    setQuery("");

    const params = new URLSearchParams(searchParams);
    params.delete("search");

    setSearchParams(params, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "All") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    if (query.trim()) {
      const search = query.trim().toLowerCase();

      result = result.filter((product) => {
        const text = [
          product.name,
          product.category,
          product.description,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return text.includes(search);
      });
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [query, category, sort]);

  return (
    <main className="page">
      <div className="container">
        <section className="shop-hero">
          <p className="eyebrow">THE COLLECTION</p>

          <h1>Shop</h1>

          <p>
            Explore our curated selection of contemporary essentials,
            designed for everyday elegance.
          </p>
        </section>

        <section className="shop-controls">
          <div className="category-list">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "active" : ""}
                onClick={() => handleCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="shop-tools">
            <div className="search-box">
              <Search size={16} />

              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search"
                aria-label="Search products"
              />

              {query && (
                <button
                  type="button"
                  className="text-btn"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="sort-box">
              <SlidersHorizontal size={15} />

              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </section>

        <section className="shop-grid">
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <Search size={38} />

              <h2>No products found</h2>

              <p>
                We couldn't find any products matching "
                {query}".
              </p>

              <button
                type="button"
                className="btn btn-dark"
                onClick={clearSearch}
              >
                Clear search
              </button>
            </div>
          )}
        </section>

        <section className="section">
          <div className="quote">
            <p className="eyebrow">NEED HELP?</p>

            <blockquote>
              Looking for something specific?{" "}
              <em>We are here to help.</em>
            </blockquote>

            <Link to="/contact" className="btn btn-dark">
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Shop;