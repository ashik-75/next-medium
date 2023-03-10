import { PostType } from "./post.types";

const posts: PostType[] = [
  {
    _id: 1,
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
      image:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  },
  {
    _id: 2,
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
    _id: 3,
    title: "BMW 3 Reavealed already",
    date: new Date().toDateString(),
    description:
      "This war is prolong to 2 years now, it is happening for power crisis.",
    slug: "show-something",
    image:
      "https://plus.unsplash.com/premium_photo-1663013582031-2721882c257b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=60",
    author: {
      _id: 7,
      name: "alex jones",
      image:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  },
  {
    _id: 4,
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
    _id: 5,
    title: "Why Britain???s (Severely) Underestimating British Collapse",
    date: new Date().toDateString(),
    description:
      "This war is prolong to 2 years now, it is happening for power crisis.",
    slug: "show-something",
    image:
      "https://images.unsplash.com/photo-1677658992560-e63ac0fa9e02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    author: {
      _id: 7,
      name: "Umair Haque",
      image:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  },
  {
    _id: 6,
    title: "US charges two men suspected of selling tech to Russia ",
    date: new Date().toDateString(),
    description:
      "The US Justice Department arrested two men on allegations that the pair illegally exported technology to Russia and provided repair services for aviation equipment.",
    slug: "show-something",
    image:
      "https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    author: {
      _id: 7,
      name: "Umair Haque",
      image:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  },
  {
    _id: 7,
    title: "US charges two men suspected of selling tech to Russia ",
    date: new Date().toDateString(),
    description:
      "The US Justice Department arrested two men on allegations that the pair illegally exported technology to Russia and provided repair services for aviation equipment.",
    slug: "show-something",
    image:
      "https://images.unsplash.com/photo-1566212775038-532d06eda485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    author: {
      _id: 7,
      name: "Umair Haque",
      image:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  },
  {
    _id: 8,
    title: "Germany will not send Swiss tanks to Ukraine",
    date: new Date().toDateString(),
    description:
      "The US Justice Department arrested two men on allegations that the pair illegally exported technology to Russia and provided repair services for aviation equipment.",
    slug: "show-something",
    image:
      "https://images.unsplash.com/photo-1630161861535-b39e5635da68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=6060",
    author: {
      _id: 7,
      name: "Umair Haque",
      image:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  },
  {
    _id: 9,
    title: "Scholz, Biden to meet in Washington and discuss support for Kyiv",
    date: new Date().toDateString(),
    description:
      "The US Justice Department arrested two men on allegations that the pair illegally exported technology to Russia and provided repair services for aviation equipment.",
    slug: "show-something",
    image:
      "https://plus.unsplash.com/premium_photo-1664303899425-d734bd0a672b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRhbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=6060",
    author: {
      _id: 7,
      name: "Umair Haque",
      image:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  },
  {
    _id: 10,
    title: "Ukraine ???not involved??? in internal Russian conflicts",
    date: new Date().toDateString(),
    description:
      "The US Justice Department arrested two men on allegations that the pair illegally exported technology to Russia and provided repair services for aviation equipment.",
    slug: "show-something",
    image:
      "https://images.unsplash.com/photo-1588449576787-a329c6d67dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHRhbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    author: {
      _id: 7,
      name: "Umair Haque",
      image:
        "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  },
];

export default posts;
