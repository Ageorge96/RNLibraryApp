interface BookBasic {
  title: string;
  author: string;
  cover?: string;
}

export interface BookshelfBook {
  title: string;
  author: string;
  genre: string;
  pages?: number;
  status: string;
  bookmark?: number;
  cover?: string;
  description?: string;
}

export interface BookmarkSceneProps extends BookBasic {
  bookmark: number;
}

export interface BookshelfListItemProps extends BookBasic {
  genre: string;
  status: string;
}
