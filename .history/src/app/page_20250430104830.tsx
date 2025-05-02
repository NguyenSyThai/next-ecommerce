"use client";

import CategoryList from "@/components/CategoryList";
import Productlist from "@/components/ProductList";
import Slider from "@/components/Slider";
import { WixClientContext } from "@/context/wixContext";
import { useContext } from "react";

const HomePage = () => {
  const myWixClient = useContext(WixClientContext);
  const getProducts = async () => {
    const res = await myWixClient.products.queryProducts().find();
  };

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Feature Products</h1>
        <Productlist />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <Productlist />
      </div>
    </div>
  );
};

export default HomePage;
