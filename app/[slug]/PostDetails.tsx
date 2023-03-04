import Image from "next/image";
import { PostType } from "../../data/post.types";

function PostDetails({ image, title, description }: PostType) {
  return (
    <div className="space-y-5 mt-5">
      <h1 className="font-extrabold text-2xl md:text-3xl text-gray-700">
        {title}
      </h1>
      <div className="h-96 rounded my-10 overflow-hidden relative">
        <Image src={image} fill alt="detailed image" className="object-cover" />
      </div>

      <div className="space-y-3 text-lg text-gray-600">
        <p>
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci eos vel, hic cumque obcaecati deleniti commodi asperiores
          odio voluptatibus qui! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Numquam neque facere explicabo! Quod labore officiis
          beatae dignissimos! Dolor, ea magnam?
        </p>
        <p>
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci eos vel, hic cumque obcaecati deleniti commodi asperiores
          odio voluptatibus qui! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Numquam neque facere explicabo! Quod labore officiis
          beatae dignissimos! Dolor, ea magnam?
        </p>
        <p>
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Adipisci eos vel, hic cumque obcaecati deleniti commodi asperiores
          odio voluptatibus qui! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Numquam neque facere explicabo! Quod labore officiis
          beatae dignissimos! Dolor, ea magnam?
        </p>
        <p>
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
