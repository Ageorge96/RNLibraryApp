import { DrawerScreenName } from "@src/navigation/navigationTypes"

export const getIconName = (screen: DrawerScreenName) => {
  const iconMap = {
    Home: 'home',
    Bookshelf: 'library',
    Wishlist: 'star',
    Profile: 'account',
  }

  return iconMap[screen]
}