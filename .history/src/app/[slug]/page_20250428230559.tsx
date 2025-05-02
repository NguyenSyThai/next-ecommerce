import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
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
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h4 className="font-medium text-2xl">$49</h4>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProducts />
        <Add />
      </div>
    </div>
  );
};

export default SignlePage;
