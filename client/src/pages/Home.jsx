import { useEffect, useState } from "react";
import { apiClient } from "../apiClient";
import Hero from "../components/Hero";
import OffersSection from "../components/OffersSection";
import ProductCard from "../components/ProductCard";


const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiClient
      .get("products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const offerProducts = products.filter((p) => p.offers?.discountPercent);

  return (
    <div className="flex flex-col">
    
      <div > {/* Adjust padding if header height changes */}
        <Hero />

        <OffersSection products={offerProducts} />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
