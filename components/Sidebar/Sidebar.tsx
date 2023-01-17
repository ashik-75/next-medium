import Footer from "./Footer";
import Tags from "./Tags";

function Sidebar() {
  return (
    <div className="space-y-4 p-5 md:p-10 md:px-0">
      <h1 className="uppercase text-gray-500 font-semibold text-sm">
        DISCOVER MORE OF WHAT MATTERS TO YOU
      </h1>

      <Tags />

      <hr className="bg-gray-500 hidden md:inline-block h-[1px]" />
      <Footer />
    </div>
  );
}

export default Sidebar;
