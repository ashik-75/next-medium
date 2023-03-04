import { PostType } from "../../data/post.types";
import posts from "../../data/posts";
import Author from "./Author";
import PostDetails from "./PostDetails";
import RecomPosts from "./RecomPosts";
import SideSection from "./SideSection";

function page(props: any) {
  const data: PostType = posts[2];
  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 p-5">
        <div className="md:col-span-8">
          <Author {...data.author} date={data.date} />
          <PostDetails {...data} />
          <RecomPosts />
        </div>
        <div className="hidden md:col-span-4 md:block ">
          <SideSection {...data.author} />
        </div>
      </div>
    </div>
  );
}

export default page;
