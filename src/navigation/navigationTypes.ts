import { Control } from "react-hook-form";

export type AddBookStackParamList = {
  Cover: {control: Control; name: string;},
  Addbook: undefined;
}

export type DrawerScreenName = 'Home' | 'Bookshelf' | 'Wishlist' | 'Profile'