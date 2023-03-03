import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import TrenList from "./TrenList";

function Trending() {
  return (
    <div>
      <div className={`p-5 space-y-3 max-w-7xl mx-auto`}>
        <div className="flex items-center gap-3">
          <ArrowTrendingUpIcon className="icon" />
          <h3 className={` text-gray-700 font-semibold`}>Trending on Medium</h3>
        </div>
        <TrenList />
      </div>
    </div>
  );
}

export default Trending;
