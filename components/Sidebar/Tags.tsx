import tags from "../../data/tags";
import Tag from "./Tag";

function Tags() {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag._id} {...tag} />
      ))}
    </div>
  );
}

export default Tags;
