import Image from "next/image";
import Link from "next/link";
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
      <div className="space-y-2 pt-1">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 relative rounded-full overflow-hidden">
            <Image
              src={post.author.image}
              className=" object-cover object-top "
              alt="author image"
              fill
            />
          </div>
          <div className="capitalize font-semibold text-sm text-gray-800">
            {post.author.name}
          </div>
        </div>

        <Link href={`/${post.slug}`}>
          <div className="font-bold">{post.title}</div>
        </Link>
        <div className="text-xs text-gray-500 flex space-x-1">
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              day: "2-digit",
              month: "long",
            })}
          </span>

          <span>.</span>
          <span className="font-bold">9 min read</span>
        </div>
      </div>
    </div>
  );
}

export default Trend;
