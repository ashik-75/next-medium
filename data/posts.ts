import { PostType } from "./post.types";

const posts: PostType[] = [
  {
    _id: 1532,
    title: "Ukraine War,15 January 2023",
    date: new Date().toDateString(),
    description: "This war is prolong to 2 years now",
    slug: "show-something",
    image: "nature.jpg",
    author: {
      _id: 2,
      name: "alex jones",
      image: "/shakira.jpg",
    },
  },
  {
    _id: 153,
    title: "ChatGPT Gain Popularity recent days",
    date: new Date().toDateString(),
    description: "This war is prolong to 2 years now",
    slug: "show-something",
    image: "nature.jpg",
    author: {
      _id: 5,
      name: "Sara jones",
      image: "/man.png",
    },
  },
  {
    _id: 15,
    title: "Belarus may join russia to attack ukaine",
    date: new Date().toDateString(),
    description: "This war is prolong to 2 years now",
    slug: "show-something",
    image: "nature.jpg",
    author: {
      _id: 7,
      name: "alex jones",
      image: "/shakira.jpg",
    },
  },
  {
    _id: 1,
    title: "Tesla Is In Immense Trouble and Musk Knows It",
    date: new Date().toDateString(),
    description: "This war is prolong to 2 years now",
    slug: "show-something",
    image: "nature.jpg",
    author: {
      _id: 3,
      name: "alex jones",
      image: "/man.png",
    },
  },
  {
    _id: 159,
    title: "Why Britain’s (Severely) Underestimating British Collapse",
    date: new Date().toDateString(),
    description: "This war is prolong to 2 years now",
    slug: "show-something",
    image: "nature.jpg",
    author: {
      _id: 7,
      name: "Umair Haque",
      image: "/shakira.jpg",
    },
  },
];

export default posts;
