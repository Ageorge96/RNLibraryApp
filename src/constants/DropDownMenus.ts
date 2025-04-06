import {SORT} from './screenEnums';

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
