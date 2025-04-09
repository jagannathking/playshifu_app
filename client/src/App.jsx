import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <div className=" bg-gray-100 flex flex-col">
      <TopBanner />
        <Navbar />
        <MenuBar />
      {/* Routes Section */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<div className="text-center py-10 text-xl">404 - Page Not Found</div>} />
        </Routes>
      </div>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}

export default App;
