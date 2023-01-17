import { PostType } from "../../data/post.types";

function PostDetails({ image, title, description }: PostType) {
  return (
    <div className="space-y-5">
      <div className="">
        <img src={image} className="w-full h-72 md:h-96 rounded" alt="" />
      </div>

      <div className="space-y-3">
        <h1 className="font-extrabold text-gray-700 tracking-wide text-xl md:text-4xl">
          {title}
        </h1>
        <p className="text-gray-600">
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci eos vel, hic cumque obcaecati deleniti commodi asperiores
          odio voluptatibus qui! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Numquam neque facere explicabo! Quod labore officiis
          beatae dignissimos! Dolor, ea magnam?
        </p>
        <p className="text-gray-600">
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci eos vel, hic cumque obcaecati deleniti commodi asperiores
          odio voluptatibus qui! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Numquam neque facere explicabo! Quod labore officiis
          beatae dignissimos! Dolor, ea magnam?
        </p>
        <p className="text-gray-600">
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci eos vel, hic cumque obcaecati deleniti commodi asperiores
          odio voluptatibus qui! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Numquam neque facere explicabo! Quod labore officiis
          beatae dignissimos! Dolor, ea magnam?
        </p>
        <p className="text-gray-600">
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci eos vel, hic cumque obcaecati deleniti commodi asperiores
          odio voluptatibus qui! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Numquam neque facere explicabo! Quod labore officiis
          beatae dignissimos! Dolor, ea magnam?
        </p>
      </div>
    </div>
  );
}

export default PostDetails;
