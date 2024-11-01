import {GENRE, STATUS} from '@src/constants/screenEnums';

interface BookBasic {
  title: string;
  author: string;
  cover?: string;
}

export type BookshelfBook = {
  title: string;
  author: string;
  genre: GENRE[];
  pages?: number;
  status?: STATUS;
  bookmark?: number;
  cover?: string;
};

export type BookshelfSectionListProps = {
  title: string;
  data: BookshelfBook[];
}[];

export interface BookmarkSceneProps extends BookBasic {
  bookmark: number;
}

export interface BookshelfListItemProps extends BookBasic {
  genre: string;
  status: string;
}

export interface HomeSceneProps extends BookBasic {
  bookmark?: number;
  rating?: number;
  price?: string;
}
