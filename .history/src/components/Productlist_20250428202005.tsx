import Image from "next/image";
import Link from "next/link";
import React from "react";

const Productlist = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/">
        <Image src="" alt="" fill sizes="25vw" />{" "}
      </Link>
    </div>
  );
};

export default Productlist;
