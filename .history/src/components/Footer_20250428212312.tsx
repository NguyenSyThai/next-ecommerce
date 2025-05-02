import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      {/* TOP  */}
      <div className="">
        {/* LEFT  */}
        <div className="w-1/4">
          <Link href="/">
            <div className="text-2xl tracking-wide">LACOSTA</div>
          </Link>
          <p className="">
            3252 Winding Way, Center Plaza, Wilowbrook, CA 90210, United States
          </p>
          <span className="">hello@lacosta.dev</span>
          <span className="">+1 324 567 890</span>
        </div>
        {/* CENTER  */}
        <div className="w-1/2"></div>
        {/* RIGHT  */}
        <div className="w-1/4"></div>
      </div>
      {/* BOTTOM  */}
      <div className=""></div>
    </div>
  );
};

export default Footer;
