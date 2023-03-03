import { PostType } from "./post.types";

const posts: PostType[] = [
  {
    _id: 1532,
    title: "Ukraine War,15 January 2023",
    date: new Date().toDateString(),
    description:
      "This war is prolong to 2 years now, it is happening for power crisis.",
    slug: "show-something",
    image:
      "https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHN0cmVldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
    description:
      "This war is prolong to 2 years now, it is happening for power crisis.",
    slug: "show-something",
    image:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
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
    description:
      "This war is prolong to 2 years now, it is happening for power crisis.",
    slug: "show-something",
    image:
      "https://plus.unsplash.com/premium_photo-1663013582031-2721882c257b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
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
    description:
      "This war is prolong to 2 years now, it is happening for power crisis.",
    slug: "show-something",
    image:
      "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
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
    description:
      "This war is prolong to 2 years now, it is happening for power crisis.",
    slug: "show-something",
    image:
      "https://images.unsplash.com/photo-1677658992560-e63ac0fa9e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    author: {
      _id: 7,
      name: "Umair Haque",
      image: "/shakira.jpg",
    },
  },
];

export default posts;
