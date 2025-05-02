"use client";

import { products } from "@wix/stores";
import React, { useState } from "react";

interface CustomizeProductsProps {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: CustomizeProductsProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
  };

  const isVariantInstock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;
      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) && variant.stock?.inStock
      );
    });
  };
  console.log(selectedOptions);
  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          {option.choices?.map((choice) => {
            const disable = !isVariantInstock({
              ...selectedOptions,
              [option.name!]: choice.description!,
            });
            const selected =
              selectedOptions[option.name!] === choice.description;
            return (
              <div
                className=""
                key={choice.value}
                onClick={() =>
                  handleOptionSelect(option.name!, choice.description!)
                }
              >
                {choice.description}
              </div>
            );
          })}
        </div>
      ))}
      {/* COLOR  */}
      {/* 
          <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
              <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </li>
          </ul> */}
      {/* OTHER  */}
      {/* <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-main text-main rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-main text-white bg-main rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul> */}
    </div>
  );
};

export default CustomizeProducts;
