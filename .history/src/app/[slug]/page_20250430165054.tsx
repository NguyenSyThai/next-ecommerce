import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";

interface SignlePageProps {
  params: {
    slug: string;
  };
}

const SignlePage = async ({ params }: SignlePageProps) => {
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  console.log(product.media?.items);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG  */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>

      {/* TEXT  */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100"></div>
        {product.priceData?.price === product.priceData?.discountedPrice ? (
          <h2 className="font-medium text-2xl">
            ${product.priceData?.discountedPrice}
          </h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.priceData?.price}
            </h3>
            <h4 className="font-medium text-2xl">
              ${product.priceData?.discountedPrice}
            </h4>
          </div>
        )}

        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100"></div>
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={}>
            <h4 className="font-medium mb-4">Title</h4>
            <p>
              Lorem Ipsum is a standard placeholder text used in the design and
              publishing industries. It's derived from a classical Latin text by
              Cicero, dating back to 45 BC. The text has been scrambled to
              create nonsensical Latin that looks like real text, making it
              perfect for design mockups and prototypes.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignlePage;
