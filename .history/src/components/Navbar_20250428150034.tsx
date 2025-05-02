import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      {/* MOBILE */}
      <div className="flex items-center justify-between">
        <Link href={"/"}>LACOSTA</Link>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
