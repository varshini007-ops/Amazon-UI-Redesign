
import { useState } from "react";
import "./App.css";
import {
  Search,
  ShoppingCart,
  MapPin,
  Menu,
  Laptop,
  Shirt,
  House,
  Sparkles,
  Watch,
  Gamepad2,
  ArrowRight,
  Star,
  Truck,
  Gift,
  Headphones
} from "lucide-react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");

  const categories = [
    { name: "Electronics", icon: Laptop },
    { name: "Fashion", icon: Shirt },
    { name: "Home & Kitchen", icon: House },
    { name: "Beauty", icon: Sparkles },
    { name: "Accessories", icon: Watch },
    { name: "Gaming", icon: Gamepad2 }
  ];

  const products = [
    {
      name: "Wireless Headphones",
      price: "₹1,499",
      oldPrice: "₹2,999",
      discount: "50% OFF",
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
      name: "Smart Watch",
      price: "₹1,999",
      oldPrice: "₹3,999",
      discount: "50% OFF",
      rating: "4.4",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
      name: "Running Shoes",
      price: "₹2,499",
      oldPrice: "₹4,999",
      discount: "50% OFF",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
      name: "Travel Backpack",
      price: "₹999",
      oldPrice: "₹1,999",
      discount: "50% OFF",
      rating: "4.3",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
      name: "Bluetooth Speaker",
      price: "₹1,299",
      oldPrice: "₹2,599",
      discount: "50% OFF",
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
    }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="navbar">
        <h2 className="logo">amazon<span>.</span></h2>

        <div className="location">
          <MapPin size={18} />
          <div>
            <small>Deliver to</small>
            <strong>India</strong>
          </div>
        </div>

        <div className="search-box">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
          />
          <button aria-label="Search">
            <Search />
          </button>
        </div>

        <div className="account">
          <small>Hello, User</small>
          <strong>Account & Lists</strong>
        </div>

        <div className="cart">
          <ShoppingCart size={25} />
          <strong>Cart ({cartCount})</strong>
        </div>
      </header>

      <nav className="sub-navbar">
        <span><Menu size={18} /> All</span>
        <span>Today's Deals</span>
        <span>Mobiles</span>
        <span>Fashion</span>
        <span>Electronics</span>
        <span>Home & Kitchen</span>
        <span>Customer Service</span>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="hero-tag">WELCOME TO YOUR SHOPPING WORLD</p>
            <h1>Discover More.<br />Shop Smarter.</h1>
            <p>Explore products you'll love at amazing prices.</p>

            <button
              className="shop-btn"
              onClick={() =>
                document.getElementById("deals")?.scrollIntoView({
                  behavior: "smooth"
                })
              }
            >
              Explore Products <ArrowRight size={18} />
            </button>
          </div>

          <div className="hero-decoration">
            <div className="hero-circle">
              SHOP<br />SMARTER
            </div>
          </div>
        </section>

        <section className="categories">
          <div className="section-heading">
            <div>
              <span className="heading-line"></span>
              <h2>Shop By Category</h2>
            </div>
            <span className="view-all">Explore All →</span>
          </div>

          <div className="category-grid">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div className="category-card" key={category.name}>
                  <div className="category-icon">
                    <Icon size={38} strokeWidth={1.7} />
                  </div>
                  <h3>{category.name}</h3>
                  <p>Explore Now →</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="deals-section" id="deals">
          <div className="section-heading">
            <div>
              <span className="heading-line"></span>
              <h2>Deals of the Day</h2>
            </div>
            <span className="view-all">View All →</span>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.name}>
                <span className="discount-badge">
                  {product.discount}
                </span>

                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>

                  <div className="rating">
                    <Star size={15} fill="#ff9900" color="#ff9900" />
                    <span>{product.rating}</span>
                  </div>

                  <div className="price">
                    <strong>{product.price}</strong>
                    <del>{product.oldPrice}</del>
                  </div>

                  <button
                    className="add-cart-btn"
                    onClick={() =>
                      setCartCount((count) => count + 1)
                    }
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}

            {filteredProducts.length === 0 && (
              <p className="no-products">
                No matching products found.
              </p>
            )}
          </div>
        </section>

        <section className="prime-banner">
          <div className="prime-content">
            <span className="prime-label">
              EXCLUSIVE MEMBERSHIP
            </span>

            <h2>amazon<span>prime</span></h2>
            <h3>More Benefits. More Happiness.</h3>

            <p>
              Enjoy fast delivery, exclusive deals and
              exciting entertainment.
            </p>

            <button className="prime-btn">
              Explore Prime <ArrowRight size={17} />
            </button>
          </div>

          <div className="prime-features">
            <div className="prime-feature">
              <Truck size={32} />
              <p>Fast Delivery</p>
            </div>

            <div className="prime-feature">
              <Gift size={32} />
              <p>Exclusive Deals</p>
            </div>

            <div className="prime-feature">
              <Headphones size={32} />
              <p>Entertainment</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-top">
            <div className="footer-about">
              <h2 className="logo">amazon<span>.</span></h2>
              <p>
                A smarter shopping experience with
                everything you love in one place.
              </p>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <p>About Us</p>
              <p>Today's Deals</p>
              <p>New Arrivals</p>
              <p>Contact Us</p>
            </div>

            <div className="footer-links">
              <h3>Customer Support</h3>
              <p>Help Center</p>
              <p>Returns</p>
              <p>Shipping Information</p>
              <p>FAQs</p>
            </div>

            <div className="footer-links">
              <h3>Stay Connected</h3>
              <p>Get updates about new products and offers.</p>
              <div className="newsletter">
                <input placeholder="Your email address" />
                <button>Join</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Amazon UI Redesign. Student Project.</p>
            <p>Designed with creativity and care.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
