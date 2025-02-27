"use client";

import { Star } from "lucide-react";
import { products } from "../data";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm text-white rounded-xl shadow-lg overflow-hidden p-5 border border-[#212525]"
        >
         <div className=" w-full h-48 relative">
         <Image
            src={product.image}
            alt={product.name}
            fill
            className=" object-cover rounded-lg"
            
          />
         </div>

          <div className="mt-4">
            <h3 className="text-2xl font-semibold">{product.name}</h3>
            <p className="text-gray-400 text-sm mt-1">{product.description}</p>

            {/* Star Rating */}
            <div className="flex items-center mt-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-500"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-300">{product.rating}/5</span>
            </div>

            {/* Available Colors */}
            <div className="flex items-center gap-2 mt-3">
              <span className="text-sm text-gray-400">Available Colors:</span>
              <div className="flex gap-1">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="w-5 h-5 rounded-full border border-gray-600"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold">${product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
