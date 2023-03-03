import posts from "../../data/posts";
import RecommenPost from "./RecommenPost";

function RecomPosts() {
  return (
    <div className="space-y-5 my-20">
      <h1 className="text-xl font-bold text-gray-600">
        More Posts from Medium
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.slice(5, 10).map((post) => (
          <RecommenPost {...post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export default RecomPosts;
