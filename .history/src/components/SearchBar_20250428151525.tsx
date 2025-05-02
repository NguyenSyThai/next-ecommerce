import Image from "next/image";

const SearchBar = () => {
  return (
    <form className="">
      <input type="text" placeholder="Search" />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
