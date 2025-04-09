import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true },

  images: [{ type: String }],
  videos: [{ type: String }],
  buyLink: { type: String },

  descriptionPoints: [{ type: String }],
  about: { type: String },

  rating: {
    average: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 }
  },

  offers: {
    title: { type: String },
    discountPercent: { type: Number },
    discountedPrice: { type: Number },
    expiresAt: { type: Date }
  },

  warrantyPeriod: { type: String }, 
  returnPolicy: { type: String },   
  refundPolicy: { type: String },  

  ageGroup: { type: String },
  learningAreas: [{ type: String }],
  languages: [{ type: String }],

  createdAt: { type: Date, default: Date.now }
});

export const Product = mongoose.model("Product", productSchema);
