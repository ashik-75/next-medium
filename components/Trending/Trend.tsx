import { PostType } from "../../data/post.types";

type TrendType = {
  index: number;
  post: PostType;
};

function Trend({ index, post }: TrendType) {
  return (
    <div className="flex items-start gap-5">
      <h1 className="font-semibold text-zinc-400 text-3xl">{`0${
        index + 1
      }`}</h1>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5">
            <img
              src={post.author.image}
              className="w-full h-full object-cover object-top rounded-full"
              alt=""
            />
          </div>
          <div className="capitalize font-semibold text-sm text-gray-800">
            {post.author.name}
          </div>
        </div>

        <div className="font-bold">{post.title}</div>
        <div className="text-sm text-gray-500">{post.date}</div>
      </div>
    </div>
  );
}

export default Trend;
