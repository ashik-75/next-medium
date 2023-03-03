import { AuthorType } from "../../data/post.types";
import posts from "../../data/posts";
import RecommenPost from "./RecommenPost";

function SideSection({
  image,
  name,
  bio = "hey man, it's me Joe",
}: AuthorType) {
  return (
    <div>
      {/* author part */}
      <div className="space-y-3 mb-10">
        <div>
          <img
            src={image}
            alt=""
            className="w-20 h-20 rounded-full object-cover object-top"
          />
        </div>

        <div>
          <h1 className="font-medium text-lg text-gray-700 capitalize">
            {name}
          </h1>
          <p className="text-gray-500 mb-3">924 Followers</p>
          <p className="text-gray-600 w-full text-sm">
            {bio} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            voluptatum ea!
          </p>
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="font-semibold text-gray-700">More From Medium</h3>

        <div className="gap-y-7 flex flex-col">
          {posts.slice(0, 3).map((post) => (
            <RecommenPost {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideSection;
