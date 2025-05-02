import Image from "next/image";
import Link from "next/link";
import React from "react";

const Productlist = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/" className="relative">
        <Image
          src="https://images.pexels.com/photos/31009027/pexels-photo-31009027/free-photo-of-australian-shepherd-and-samoyed-playing-on-beach.jpeg"
          alt=""
          fill
          sizes="25vw"
        />{" "}
      </Link>
    </div>
  );
};

export default Productlist;
