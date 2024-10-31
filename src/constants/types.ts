import { GENRE, STATUS } from "./screenEnums";

export type CompleteBook = {
  id: number;
  title: string;
  author: string;
  genre: GENRE;
  pages?: number;
  status?: STATUS;
  bookmark?: number;
  cover?: string;
  rating?: string | number;
  description: string;
  price: string;
};
