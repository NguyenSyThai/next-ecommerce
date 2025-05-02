"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavIcons = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 xl:gap-6">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      {isProfileOpen && (
        <div className="">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <Image
        src="/cart.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
    </div>
  );
};

export default NavIcons;
