import Link from "next/link";
import { PostType } from "../../data/post.types";

function RecommenPost({ image, title, author, slug }: PostType) {
  return (
    <Link href={`/${slug}`}>
      <div className="flex gap-2 w-full items-start">
        <div className="flex-1">
          <div className="flex gap-3 items-center">
            <div>
              <img
                src={author.image}
                className="h-5 w-5 object-cover object-top rounded-full"
                alt=""
              />
            </div>
            <p className="text-gray-500 capitalize ">{author.name}</p>
          </div>

          <h1 className="text-lg font-bold text-gray-600">{title}</h1>
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
