import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { AuthorType } from "../../data/post.types";
type AuthType = AuthorType & {
  date: string;
};

function Author({ image, name, date }: AuthType) {
  return (
    <div className="flex gap-x-4">
      <div className="shrink-0">
        <img src={image} className="h-10 w-10 rounded-full" alt="" />
      </div>

      <div className="flex-1">
        <div className="flex text-gray-600 items-center justify-between">
          <p className="capitalize">{name}</p>
          <div className="flex gap-x-3 text-gray-400">
            <BsFacebook />
            <BsTwitter />
            <BsLinkedin />
            <MdOutlineBookmarkAdd className="ml-5" size={20} />
          </div>
        </div>
        <div className="flex gap-x-2 text-gray-400">
          <span>{date}</span>
          <span>.</span>
          <span>6 min read</span>
        </div>
      </div>
    </div>
  );
}

export default Author;
