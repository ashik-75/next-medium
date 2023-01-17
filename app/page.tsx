import Hero from "../components/Hero";
import MainLayout from "../components/MainLayout";
import Trending from "../components/Trending";

function Homepage() {
  return (
    <div>
      <Hero />
      <Trending />
      <hr className="bg-gray-300 h-[.5px]" />

      <MainLayout />
    </div>
  );
}

export default Homepage;
