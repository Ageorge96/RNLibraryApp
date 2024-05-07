export type CompleteBook = {
  id: number;
  title: string;
  author: string;
  genre: string;
  pages?: number;
  status?: string;
  bookmark?: number;
  cover?: string;
  Rating?: string | number;
  description: string;
  price: string;
};
