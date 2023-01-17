export type AuthorType = {
  _id: number;
  name: string;
  image: string;
  bio?: string;
};

export type PostType = {
  _id: number;
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  author: AuthorType;
};
