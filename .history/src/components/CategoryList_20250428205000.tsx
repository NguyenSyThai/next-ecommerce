import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test">
          <div className="">
            <Image src="" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
