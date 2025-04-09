import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, title, price, images, offers, rating, category } = product;
  const imageUrl = images?.[0];

  return (
    <Link to={`/product/${_id}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
        {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
        <div className="p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{category}</p>

          <div className="flex justify-between items-center mt-3">
            <span className="text-xl font-semibold text-indigo-600">
              ₹{offers?.discountedPrice || price}
            </span>
            {offers?.discountPercent && (
              <span className="text-sm line-through text-gray-400">₹{price}</span>
            )}
          </div>

          {rating?.average && (
            <p className="text-yellow-500 mt-2 text-sm">
              ⭐ {rating.average} ({rating.totalReviews} reviews)
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
