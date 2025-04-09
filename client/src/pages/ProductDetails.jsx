import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../apiClient";
import { useCart } from "../context/CartContext";
import {
  FaShippingFast,
  FaUndo,
  FaShieldAlt,
  FaMobileAlt,
  FaClock,
  FaInfoCircle,
} from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    apiClient
      .get(`products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setMainImage(res.data.images?.[0]);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product)
    return (
      <div className="p-6 text-center text-lg font-semibold text-gray-600">
        Loading...
      </div>
    );

  const {
    title,
    images = [],
    descriptionPoints = [],
    offers,
    price,
    rating,
    ageGroup,
    about,
    category,
    buyLink,
    returnPolicy,
    refundPolicy,
    warrantyPeriod,
    learningAreas = [],
    languages = [],
  } = product;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div>
          <img
            src={mainImage}
            alt={title}
            className="rounded-xl w-full object-cover max-h-[450px] bg-gray-100"
          />
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {images.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                alt={`thumb-${idx}`}
                onClick={() => setMainImage(thumb)}
                className={`w-20 h-20 rounded-lg cursor-pointer transition-transform hover:scale-105 ${
                  mainImage === thumb ? "ring-2 ring-indigo-400" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-sm text-indigo-500 font-medium mb-4">
            Category: {category}
          </p>

          <ul className="text-gray-600 mb-6 list-disc pl-5 space-y-1">
            {descriptionPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>

          <div className="text-yellow-500 font-semibold text-lg mb-2">
            {"★".repeat(Math.floor(rating?.average || 4))}
            <span className="text-gray-700 ml-2 text-base">
              ({rating?.average} / 5 from {rating?.totalReviews} reviews)
            </span>
          </div>

          {offers?.discountPercent && (
            <div className="mb-4">
              <span className="text-red-600 font-semibold bg-red-50 px-3 py-1 rounded-full inline-block text-sm">
                {offers.title} - {offers.discountPercent}% OFF
              </span>
              <p className="text-xs text-gray-500 mt-1">
                Offer valid till {new Date(offers.expiresAt).toLocaleDateString()}
              </p>
            </div>
          )}

          <div className="text-2xl font-bold text-indigo-600 mb-4">
            ₹{offers?.discountedPrice || price}
            {offers?.discountPercent && (
              <span className="line-through text-gray-400 text-base ml-3">
                ₹{price}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => addToCart(product)}
              className="px-5 py-2.5 bg-indigo-100 text-indigo-700 font-medium rounded-md hover:bg-indigo-200 transition"
            >
              Add to Cart
            </button>
            <a
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-green-100 text-green-700 font-medium rounded-md hover:bg-green-200 transition"
            >
              Buy Now
            </a>
          </div>

          {/* Features */}
          <div className="bg-indigo-50 rounded-xl p-4 mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-sm text-center text-gray-700">
            <div>
              <FaClock className="mx-auto text-indigo-500 text-2xl mb-1" />
              <p className="font-semibold">Age Group</p>
              <p>{ageGroup}</p>
            </div>
            <div>
              <FaShippingFast className="mx-auto text-green-500 text-2xl mb-1" />
              <p className="font-semibold">Free Shipping</p>
            </div>
            <div>
              <FaShieldAlt className="mx-auto text-yellow-500 text-2xl mb-1" />
              <p className="font-semibold">Warranty</p>
              <p>{warrantyPeriod}</p>
            </div>
            <div>
              <FaMobileAlt className="mx-auto text-pink-500 text-2xl mb-1" />
              <p className="font-semibold">Device</p>
              <p>Not Included</p>
            </div>
            <div>
              <FaUndo className="mx-auto text-red-400 text-2xl mb-1" />
              <p className="font-semibold">Return</p>
              <p>30 Days</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section Full Width */}
      <div className="mt-10 bg-gray-50 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <FaInfoCircle className="text-indigo-600 text-2xl mr-2" />
          <h2 className="text-2xl font-bold text-gray-800">About Product</h2>
        </div>
        <p className="text-gray-700 text-base leading-relaxed">{about}</p>

        <div className="grid md:grid-cols-2 gap-6 mt-6 text-sm text-gray-700">
          <div>
            <strong>Return Policy:</strong>
            <p>{returnPolicy}</p>
          </div>
          <div>
            <strong>Refund Policy:</strong>
            <p>{refundPolicy}</p>
          </div>
          <div>
            <strong>Learning Areas:</strong>
            <p>{learningAreas.join(", ")}</p>
          </div>
          <div>
            <strong>Available Languages:</strong>
            <p>{languages.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
