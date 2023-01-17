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
              className="w-5 h-5 rounded-full object-cover object-top"
              alt=""
            />
            <span>{author.name}</span>
          </div>
          <h1 className="font-bold text-xl">{title}</h1>
          <p>{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <p>{date}</p>
              <span className="bg-gray-200 rounded-full px-4  py-1">funny</span>
            </div>

            <BookmarkIcon className="icon" />
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/cover.jpg"
            className="h-40 w-full object-cover rounded "
            alt=""
          />
        </div>
      </div>
    </Link>
  );
}

export default Post;
