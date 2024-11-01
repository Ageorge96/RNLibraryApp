import { DropDownItems } from '@components/customNative/DropDown/types';
import {GENRE, SORT, STATUS} from './screenEnums';

export const orderDropDown = {
  placeholder: 'Sorting order',
  menuItems: [
    {label: SORT.ASD, value: SORT.ASD},
    {label: SORT.DESC, value: SORT.DESC},
  ],
};

export const categoryDropDown = {
  placeholder: 'Select a type',
  menuItems: [
    {label: SORT.TITLE, value: SORT.TITLE},
    {label: SORT.AUTHOR, value: SORT.AUTHOR},
    {label: SORT.GENRE, value: SORT.GENRE},
    {label: SORT.STATUS, value: SORT.STATUS},
    {label: SORT.BOOKMARK, value: SORT.BOOKMARK},
  ],
};

export const genreDropDownMenu: DropDownItems = {
  title: 'Genre*',
  placeholder: 'Select a genre',
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

export const statusDropDownMenu = {
  title: 'Status*',
  placeholder: 'Select a status',
  menuItems: [
    {label: STATUS.READY, value: STATUS.READY},
    {label: STATUS.ACTIVE, value: STATUS.ACTIVE},
    {label: STATUS.FINISHED, value: STATUS.FINISHED},
    {label: STATUS.NEXT, value: STATUS.NEXT},
  ],
};
