import Productlist from "@/components/Productlist";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24">
        <Productlist />
      </div>
    </div>
  );
};

export default HomePage;
