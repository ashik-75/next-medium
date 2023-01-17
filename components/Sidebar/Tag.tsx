import { TagsTypes } from "../../data/tags.types";

function Tag({ title }: TagsTypes) {
  return <div className="w-fit px-4 py-2 border text-gray-500">{title}</div>;
}

export default Tag;
