import { useState } from "react";
import { countries } from "../data/countries"; 
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#fff0f5] shadow-sm py-4 px-6 md:px-10 lg:px-20">
      <div className="flex justify-between items-center gap-8">
     
        <div className="flex items-center gap-4 flex-1">
          {/* Country Selector */}
          <select
            className="text-lg border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-pink-500"
            value={selectedCountry.code}
            onChange={(e) =>
              setSelectedCountry(
                countries.find((c) => c.code === e.target.value)
              )
            }
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.currency}
              </option>
            ))}
          </select>

          {/* Search */}
          <input
            type="text"
            placeholder="Search for products..."
            className="hidden md:block border border-gray-300 px-5 py-2.5 rounded-md text-lg w-72 focus:outline-pink-500 shadow-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Center Section: Logo */}
        <div className="flex justify-center flex-1">
          <Link
            to="/"
            className="text-3xl font-bold text-pink-600 hover:text-pink-700 transition"
          >
            PlayShifu
          </Link>
        </div>

        {/* Right Section: Cart & Profile */}
        <div className="flex items-center gap-6 justify-end flex-1 text-gray-700 text-3xl">
          <Link to="/cart" title="Cart">
            <FaShoppingCart className="hover:text-pink-600 transition duration-300" />
          </Link>
          <Link to="/profile" title="Profile">
            <FaUserCircle className="hover:text-pink-600 transition duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
