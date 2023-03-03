import tags from "../../data/tags";

function Tags() {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <div
          className="w-fit px-3 py-1 text-sm border text-gray-500"
          key={tag._id}
        >
          {tag.title}
        </div>
      ))}
    </div>
  );
}

export default Tags;
