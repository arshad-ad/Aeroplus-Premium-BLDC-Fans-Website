"use client";

import Image from "next/image";
import { useState } from "react";
import { superProducts } from "../data";

const SuperProduct = () => {
  // Define product colors and corresponding images


  // State to track selected color
  const [selectedColor, setSelectedColor] = useState(
    superProducts.reduce((acc, product) => {
      acc[product.id] = "blue"; // Default color
      return acc;
    }, {} as Record<number, keyof typeof superProducts[0]["colors"]>)
  );

  const handleColorChange = (productId: number, color: keyof typeof superProducts[0]["colors"]) => {
    setSelectedColor((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  return (
    <div className=" text-white py-12 px-6 md:px-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between rounded-3xl p-10">
        {/* Left Text */}
        <div className="w-full md:w-2/3 flex justify-center items-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#020024] via-[#21E065] to-[#DDFFDC] bg-clip-text text-transparent ">
            Aeroplus Signature Series – The Best in Cooling
          </h2>
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/3 text-center md:text-left text-[#21E065] mt-6 md:mt-0">
          <p className="text-sm md:text-base">
            Discover Our Special Collection – Innovation, Performance & Style Combined
          </p>
        </div>
      </div>

      {/* Product Display */}
    {superProducts.map((product)=>(
        <div className="mt-12 flex flex-col md:flex-row items-center justify-start gap-8" key={product.id}>
        {/* Product Image */}
        <div className="relative w-72 h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.colors[selectedColor[product.id]]}
            alt="SuperProduct Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-5 max-w-lg">
          <h1 className="text-4xl font-light bg-gradient-to-r from-[#020024] via-[#21E065] to-[#DDFFDC] bg-clip-text text-transparent">{product.name}</h1>
          <p className="text-[#6c836b] text-sm font-light">
           {product.description}
          </p>

          {/* Color Selection */}
          <div className="flex gap-4">
            {Object.entries(product.colors).map(([color, _]) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full transition ${
                  selectedColor === color ? "border-white scale-110" : "border-gray-500"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(product.id,color as keyof typeof product.colors)}
              />
            ))}
          </div>

          {/* Product Description */}
          <p className="text-[#ddffdc99] text-sm">
            {product.details}
          </p>
        </div>
      </div>
    ))}
    </div>
  );
};

export default SuperProduct;
