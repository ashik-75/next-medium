import posts from "../../data/posts";
import Trend from "./Trend";

function TrenList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post, index) => (
        <Trend key={post._id} index={index} post={post} />
      ))}
    </div>
  );
}

export default TrenList;
