import {faker} from '@faker-js/faker';
import { CompleteBook } from './types';

export const bookmarkData = [
  {
    id: 1,
    title: 'Dune',
    author: 'Frank Herbert',
    bookmark: 75,
    cover:
      'https://cdn.kobo.com/book-images/3bf2e000-0418-4d89-ae3a-f9f3bbc92865/353/569/90/False/dune-the-graphic-novel-book-1-dune.jpg',
  },
  {
    id: 2,
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    bookmark: 192,
    cover:
      'https://www.gollancz.co.uk/wp-content/uploads/2018/07/hbg-title-9780575097360-847.jpg?w=440',
  },
  {
    id: 3,
    title: 'Halo: The Fall of Reach',
    author: 'Eric Nylund',
    bookmark: 111,
    cover: 'https://m.media-amazon.com/images/I/71fo5EG88xL._SY522_.jpg',
  },
];

export const wishlistData = [
  {
    id: faker.number.int(),
    title: faker.company.catchPhrase(),
    author: faker.person.fullName(),
    cover: faker.image.url(),
    rating: faker.number.int({min: 0, max: 5}),
    price: faker.commerce.price({max: 99, dec: 2, symbol: '£'}),
  },
  {
    id: faker.number.int(),
    title: faker.company.catchPhrase(),
    author: faker.person.fullName(),
    cover: faker.image.url(),
    rating: faker.number.int({min: 0, max: 5}),
    price: faker.commerce.price({max: 99, dec: 2, symbol: '£'}),
  },
  {
    id: faker.number.int(),
    title: faker.company.catchPhrase(),
    author: faker.person.fullName(),
    cover: faker.image.url(),
    rating: faker.number.int({min: 0, max: 5}),
    price: faker.commerce.price({max: 99, dec: 2, symbol: '£'}),
  },
  {
    id: faker.number.int(),
    title: faker.company.catchPhrase(),
    author: faker.person.fullName(),
    cover: faker.image.url(),
    rating: faker.number.int({min: 0, max: 5}),
    price: faker.commerce.price({max: 99, dec: 2, symbol: '£'}),
  },
];

// Bookshelf data
export const myBooksMocks = [
  {
    title: 'Bookshelf',
    data: [
      
        {
          title: faker.company.name(),
          author: faker.person.fullName(),
          genre: faker.person.zodiacSign(),
          status: faker.company.catchPhrase(),
          cover: faker.image.url(),
        },
        {
          title: faker.company.catchPhrase(),
          author: faker.person.fullName(),
          genre: faker.person.zodiacSign(),
          status: faker.company.catchPhrase(),
          cover: faker.image.url(),
        },
        {
          title: faker.company.catchPhrase(),
          author: faker.person.fullName(),
          genre: faker.person.zodiacSign(),
          status: faker.company.catchPhrase(),
          cover: faker.image.url(),
        },
        {
          title: faker.company.catchPhrase(),
          author: faker.person.fullName(),
          genre: faker.person.zodiacSign(),
          status: faker.company.catchPhrase(),
          cover: faker.image.url(),
        },
        {
          title: faker.company.catchPhrase(),
          author: faker.person.fullName(),
          genre: faker.person.zodiacSign(),
          status: faker.company.catchPhrase(),
          cover: faker.image.url(),
        },
      
    ],
  },
];

export const completeBookMockData: CompleteBook[] = [
  {
    id: faker.number.int(),
    title: faker.company.catchPhrase(),
    author: faker.person.fullName(),
    genre: faker.person.zodiacSign(),
    status: faker.company.catchPhrase(),
    cover: faker.image.url(),
    pages: faker.number.int({max: 9999}),
    rating: faker.number.int({min: 0, max: 5}),
    description: faker.lorem.paragraph({min: 1, max: 3}),
    price: faker.commerce.price({max: 99, dec: 2, symbol: '£'}),
  },
  {
    id: faker.number.int(),
    title: faker.company.catchPhrase(),
    author: faker.person.fullName(),
    genre: faker.person.zodiacSign(),
    status: faker.company.catchPhrase(),
    cover: faker.image.url(),
    pages: faker.number.int({max: 9999}),
    rating: faker.number.int({min: 0, max: 5}),
    description: faker.lorem.paragraph({min: 1, max: 3}),
    price: faker.commerce.price({max: 99, dec: 2, symbol: '£'}),
  },
  {
    id: faker.number.int(),
    title: faker.company.catchPhrase(),
    author: faker.person.fullName(),
    genre: faker.person.zodiacSign(),
    status: faker.company.catchPhrase(),
    cover: faker.image.url(),
    pages: faker.number.int({max: 9999}),
    rating: faker.number.int({min: 0, max: 5}),
    description: faker.lorem.paragraph({min: 1, max: 3}),
    price: faker.commerce.price({max: 99, dec: 2, symbol: '£'}),
  },
  {
    id: faker.number.int(),
    title: faker.company.catchPhrase(),
    author: faker.person.fullName(),
    genre: faker.person.zodiacSign(),
    status: faker.company.catchPhrase(),
    cover: faker.image.url(),
    pages: faker.number.int({max: 9999}),
    rating: faker.number.int({min: 0, max: 5}),
    description: faker.lorem.paragraph({min: 1, max: 3}),
    price: faker.commerce.price({max: 99, dec: 2, symbol: '£'}),
  },
];

export const CoverList: string[] = [
  'https://cdn.kobo.com/book-images/3bf2e000-0418-4d89-ae3a-f9f3bbc92865/353/569/90/False/dune-the-graphic-novel-book-1-dune.jpg',
  'https://www.gollancz.co.uk/wp-content/uploads/2018/07/hbg-title-9780575097360-847.jpg?w=440',
  'https://m.media-amazon.com/images/I/71fo5EG88xL._SY522_.jpg',
  'https://i0.wp.com/www.printmag.com/wp-content/uploads/2023/12/SuzanneDean.jpg?resize=630%2C1024&quality=89&ssl=1',
  'https://m.media-amazon.com/images/I/61pGsq5vq7L._SY445_SX342_.jpg',
]