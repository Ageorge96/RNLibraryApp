import {DropDownItems} from '@components/customNative/DropDown/types';
import {GENRE, STATUS} from '@src/common/constants/screenEnums';

export type BookshelfFormFields = {
  [K in keyof BookshelfFormKeys]: {
    title: string;
    placeholder: string;
    required: boolean;
  };
};

export interface BookshelfFormKeys {
  title: string;
  author: string;
  pages: string;
  bookmark: string;
  cover: string;
}

export const BookshelfFormValues: BookshelfFormFields = {
  title: {
    required: true,
    title: 'Title*',
    placeholder: 'Enter title',
  },
  author: {
    title: 'Author*',
    required: true,
    placeholder: "Enter author's name",
  },
  pages: {
    required: false,
    title: 'Total Pages',
    placeholder: '00',
  },
  bookmark: {
    required: false,
    title: 'Bookmark',
    placeholder: '00',
  },
  cover: {
    required: false,
    title: 'Cover',
    placeholder: 'Provide an image url',
  },
};

export const genreDropDownMenu: DropDownItems = {
  title: 'Genre*',
  placeholder: 'Select a genre',
  required: true,
  menuItems: [
    {label: GENRE.ACTION, value: GENRE.ACTION},
    {label: GENRE.BIOGRAPHICAL, value: GENRE.BIOGRAPHICAL},
    {label: GENRE.CLASSICAL, value: GENRE.CLASSICAL},
    {label: GENRE.CRIME, value: GENRE.CRIME},
    {label: GENRE.FANTASY, value: GENRE.FANTASY},
    {label: GENRE.HISTORICAL, value: GENRE.HISTORICAL},
    {label: GENRE.HORROR, value: GENRE.HORROR},
    {label: GENRE.LITERARY, value: GENRE.LITERARY},
    {label: GENRE.MILITARY, value: GENRE.MILITARY},
    {label: GENRE.MYSTERY, value: GENRE.MYSTERY},
    {label: GENRE.NONFICTION, value: GENRE.NONFICTION},
    {label: GENRE.ROMANCE, value: GENRE.ROMANCE},
    {label: GENRE.SCIFI, value: GENRE.SCIFI},
    {label: GENRE.THRILLER, value: GENRE.THRILLER},
    {label: GENRE.YA, value: GENRE.YA},
  ],
  multiple: true,
};

export const statusDropDownMenu: DropDownItems = {
  title: 'Status*',
  placeholder: 'Select a status',
  required: true,
  menuItems: [
    {label: STATUS.READY, value: STATUS.READY},
    {label: STATUS.ACTIVE, value: STATUS.ACTIVE},
    {label: STATUS.FINISHED, value: STATUS.FINISHED},
    {label: STATUS.NEXT, value: STATUS.NEXT},
  ],
};
