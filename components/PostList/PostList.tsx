import posts from "../../data/posts";
import Post from "./Post";

function PostList() {
  return (
    <div className=" flex flex-col gap-7 p-5 md:p-10">
      {posts.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </div>
  );
}

export default PostList;
