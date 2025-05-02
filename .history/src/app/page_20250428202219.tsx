import Productlist from "@/components/Productlist";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <Productlist />
      </div>
    </div>
  );
};

export default HomePage;
