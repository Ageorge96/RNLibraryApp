// https://www.codecademy.com/courses/learn-redux/articles/implementing-the-redux-store-from-scratch
import {configureStore} from '@reduxjs/toolkit';
import bookshelfReducer from '@src/feature/BookshelfSectionList/bookshelf.slice';

const store = configureStore({
  reducer: {
    bookshelf: bookshelfReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
