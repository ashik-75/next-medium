"use client";

import { useState } from "react";
import posts from "../../data/posts";
import Post from "./Post";

function Spinner() {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

function PostList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState(posts.slice(0, 2));
  const [index, setIndex] = useState(2);

  const time: number = 1000;

  const loadMoreData = () => {
    setIndex((prev) => (prev <= 10 ? prev + 2 : prev));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData(posts.slice(0, index + 2));
    }, time);
  };

  return (
    <div className=" flex flex-col gap-7 p-5 md:p-10">
      {data.map((post) => (
        <Post key={post._id} {...post} />
      ))}

      <div className="flex justify-center p-10">
        {index < 10 ? (
          <button
            onClick={loadMoreData}
            className="border rounded-lg px-4 py-2 font-medium flex items-center"
          >
            {loading && <Spinner />}
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default PostList;
