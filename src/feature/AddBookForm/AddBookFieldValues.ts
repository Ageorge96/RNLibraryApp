export interface BookshelfFormField {
  required: boolean;
  fieldProps: any;
}

export const BookshelfFormValues = {
  title: {
    title: 'Title*',
    placeholder: 'Enter title',
  },
  author: {
    title: 'Author*',
    placeholder: "Enter author's name",
  },
  genre: {
    title: 'Genre*',
    placeholder: 'Select genre/s',
  },
  status: {
    title: 'Status*',
    placeholder: "Select book's status",
  },
  pages: {
    title: 'Total Pages',
    placeholder: '00',
  },
  bookmark: {
    title: 'Bookmark',
    placeholder: '00',
  },
  cover: {
    title: 'Cover',
    placeholder: 'Provide an image url',
  },
};
