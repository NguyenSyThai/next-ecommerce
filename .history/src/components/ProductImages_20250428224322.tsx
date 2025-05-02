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
          sizes="30vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="">
        <div className="w-1/4 h-32 relative gap-4 mt-8">
          <Image
            src="https://images.pexels.com/photos/31001131/pexels-photo-31001131/free-photo-of-magical-evening-in-tokyo-s-lantern-lit-alley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
