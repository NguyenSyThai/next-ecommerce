import ProductImages from "@/components/ProductImages";

const SignlePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG  */}
      <div className="">
        <ProductImages />
      </div>

      {/* TEXT  */}
      <div className=""></div>
    </div>
  );
};

export default SignlePage;
