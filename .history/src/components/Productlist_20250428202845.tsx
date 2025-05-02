import Image from "next/image";
import Link from "next/link";
import React from "react";

const Productlist = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/29198201/pexels-photo-29198201/free-photo-of-vintage-red-car-rear-in-montigny-le-bretonneux.jpeg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/31001131/pexels-photo-31001131/free-photo-of-magical-evening-in-tokyo-s-lantern-lit-alley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
      </Link>
    </div>
  );
};

export default Productlist;
