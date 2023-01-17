import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import TrenList from "./TrenList";

function Trending() {
  return (
    <div className={`p-5 md:p-10 space-y-3 max-w-7xl mx-auto`}>
      <div className="flex items-center gap-3">
        <ArrowTrendingUpIcon className="icon" />
        <h3 className={` uppercase font-semibold`}>TRENDING ON MEDIUM</h3>
      </div>

      <TrenList />
    </div>
  );
}

export default Trending;
