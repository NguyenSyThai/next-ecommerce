"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <div className="">
          <Image
            src="https://www.pexels.com/photo/australian-shepherd-and-samoyed-playing-on-beach-31009027/"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-sm"
          />
          <div className="">
            {/* TOP  */}
            <div className="">
              {/* TITLE  */}
              <div className="">
                <h3>Product Name</h3>
                <div className="">$49</div>
              </div>
              {/* DESC  */}
            </div>
            {/* BOTTOM  */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
