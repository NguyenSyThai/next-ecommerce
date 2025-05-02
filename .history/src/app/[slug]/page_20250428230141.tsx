import ProductImages from "@/components/ProductImages";

const SignlePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG  */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      {/* TEXT  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem Ipsum is a standard placeholder text used in the design and
          publishing industries. It's derived from a classical Latin text by
          Cicero, dating back to 45 BC. The text has been scrambled to create
          nonsensical Latin that looks like real text, making it perfect for
          design mockups and prototypes.
        </p>
      </div>
    </div>
  );
};

export default SignlePage;
