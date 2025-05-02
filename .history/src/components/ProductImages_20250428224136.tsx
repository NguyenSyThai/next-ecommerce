import Image from "next/image";
import React from "react";

const ProductImages = () => {
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src="https://images.pexels.com/photos/31001131/pexels-photo-31001131/free-photo-of-magical-evening-in-tokyo-s-lantern-lit-alley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductImages;
