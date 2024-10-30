import { BookshelfBook } from "@components/scenes/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GENRE, STATUS } from "@src/constants/screenEnums";

const exampleBook: BookshelfBook = {
  title: 'Halo: The Fall of Reach',
  author: 'Eric Nylund',
  genre: [GENRE.SCIFI, GENRE.MILITARY],
  pages: 464,
  status: STATUS.READY,
  cover: 'https://m.media-amazon.com/images/I/41Gt8WZOP5L._SY445_SX342_.jpg',
};

export const bookshelfSlice = createSlice({
  name: 'bookshelf',
  initialState: [exampleBook],
  reducers: {
    loadBooks: (state: BookshelfBook[]) => state,
    AddBook: (state: BookshelfBook[], action: PayloadAction<BookshelfBook>) => {
      state.push(action.payload);
    },
  },
});

export default bookshelfSlice.reducer;
