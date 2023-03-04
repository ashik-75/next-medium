import { BookmarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { PostType } from "../../data/post.types";

function Post({ title, author, date, description, slug, image }: PostType) {
  return (
    <Link href={`/${slug}`}>
      <div className="flex w-full gap-5">
        <div className="w-[60%] space-y-2">
          <div className="flex items-center gap-x-3">
            <div className="relative w-7 h-7 rounded-full overflow-hidden">
              <Image
                src={author.image}
                fill
                className="object-cover object-top"
                alt="author image"
              />
            </div>
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
        <div className="flex-1 relative rounded overflow-hidden">
          <Image src={image} alt="post image" fill />
        </div>
      </div>
    </Link>
  );
}

export default Post;
