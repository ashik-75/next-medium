import { PostType } from "../../data/post.types";
import posts from "../../data/posts";
import Author from "./Author";
import PostDetails from "./PostDetails";
import RecomPosts from "./RecomPosts";
import SideSection from "./SideSection";

function page(props: any) {
  const data: PostType = posts[0];
  return (
    <div className="max-w-7xl mx-auto divide-x flex min-h-screen">
      <div className="w-[100%] md:w-[75%] p-5  md:px-20 md:p-10 space-y-10">
        <Author {...data.author} date={data.date} />
        <PostDetails {...data} />
        <RecomPosts />
      </div>
      <div className="hidden md:inline p-10 flex-1 ">
        <SideSection {...data.author} />
      </div>
    </div>
  );
}

export default page;
