import { BookmarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { PostType } from "../../data/post.types";

function Post({ title, author, date, description, slug, image }: PostType) {
  return (
    <Link href={`/${slug}`}>
      <div className="flex w-full gap-5">
        <div className="w-[60%] space-y-2">
          <div className="flex items-center gap-x-3">
            <img
              src={author.image}
              className="w-7 h-7 rounded-full object-cover object-top"
              alt=""
            />
            <span className="capitalize font-medium text-sm">
              {author.name} <span className="text-gray-500">in</span> Towards
              Data Science
            </span>
          </div>
          <h1 className="font-extrabold text-xl">{title}</h1>
          <p className="font-medium text-gray-600">{description}</p>
          <div className="flex items-start max-w-[90%] justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <p>{date}</p>
              <span className="bg-gray-200 rounded-full px-3 text-xs font-medium  py-1">
                funny
              </span>
            </div>

            <BookmarkIcon className="icon" />
          </div>
        </div>
        <div className="flex-1">
          <div className="h-40 rounded-lg overflow-hidden">
            <img
              src={image}
              className="h-full w-full hover:scale-110 transition-all "
              alt=""
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
