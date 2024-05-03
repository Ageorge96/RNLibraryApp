interface BookBasic {
  title: string;
  author: string;
  cover?: string;
}

export type BookshelfBook = {
  title: string;
  author: string;
  genre: string;
  pages?: number;
  status: string;
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
