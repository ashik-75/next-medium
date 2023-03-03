import Link from "next/link";
import { PostType } from "../../data/post.types";

function RecommenPost({ image, title, author, slug }: PostType) {
  return (
    <Link href={`/${slug}`}>
      <div className="flex gap-2 w-full items-start">
        <div className="flex-1 space-y-2">
          <div className="flex gap-3 items-center">
            <div>
              <img
                src={author.image}
                className="h-7 w-7 object-cover object-top rounded-full"
                alt=""
              />
            </div>
            <p className="text-gray-700 font-medium capitalize text-sm ">
              {author.name} <span className="text-gray-500">in</span> Towards
              Data Science
            </p>
          </div>

          <h1 className=" font-bold text-lg text-gray-800">{title}</h1>
        </div>
        <div className="h-16 w-20 shrink-0">
          <img
            src={image}
            className=" w-full h-full rounded object-cover object-top"
            alt=""
          />
        </div>
      </div>
    </Link>
  );
}

export default RecommenPost;
