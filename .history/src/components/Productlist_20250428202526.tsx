import Image from "next/image";
import Link from "next/link";
import React from "react";

const Productlist = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/" className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/29198201/pexels-photo-29198201/free-photo-of-vintage-red-car-rear-in-montigny-le-bretonneux.jpeg"
          alt=""
          fill
          sizes="25vw"
        />
        <Image
          src="https://images.pexels.com/photos/31001131/pexels-photo-31001131/free-photo-of-magical-evening-in-tokyo-s-lantern-lit-alley.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
        />
      </Link>
    </div>
  );
};

export default Productlist;
