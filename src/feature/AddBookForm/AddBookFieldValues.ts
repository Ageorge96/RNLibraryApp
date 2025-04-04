type BookshelfFormField = {
  [K in keyof BookshelfFormKeys]: {
    title: string;
    placeholder: string;
    required: boolean;}
}

interface BookshelfFormKeys {
  title: string;
  author: string;
  pages: string;
  bookmark: string;
  cover: string;
}



export const BookshelfFormValues: BookshelfFormField = {
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
} ;
