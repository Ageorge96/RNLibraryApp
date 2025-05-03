import {
  CommonActions,
  DrawerActions,
  type DrawerNavigationState,
  type ParamListBase,
  useLinkBuilder,
} from '@react-navigation/native';
import * as React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { DrawerDescriptorMap, DrawerNavigationHelpers } from 'node_modules/@react-navigation/drawer/lib/typescript/module/src/types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerScreenName } from '../navigationTypes';
import { getIconName } from '@src/common/mappers/iconMapper';



type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

/**
 * Component that renders the navigation list in the drawer.
 */
export function DrawerItemList({ state, navigation, descriptors }: Props) {
  const { buildHref } = useLinkBuilder();

  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;

  const {
    drawerActiveTintColor,
    drawerInactiveTintColor,
    drawerActiveBackgroundColor,
    drawerInactiveBackgroundColor,
  } = focusedOptions;

  return state.routes.map((route, i) => {
    const focused = i === state.index;
    const iconName = getIconName(route.name as DrawerScreenName)

    const onPress = () => {
      const event = navigation.emit({
        type: 'drawerItemPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!event.defaultPrevented) {
        navigation.dispatch({
          ...(focused
            ? DrawerActions.closeDrawer()
            : CommonActions.navigate(route)),
          target: state.key,
        });
      }
    };

    const {
      title,
      drawerLabel,
      drawerLabelStyle,
      drawerItemStyle,
      drawerAllowFontScaling,
    } = descriptors[route.key].options;

    return (
      <DrawerItem
        key={route.key}
        route={route}
        href={buildHref(route.name, route.params)}
        label={
          drawerLabel !== undefined
            ? drawerLabel
            : title !== undefined
              ? title
              : route.name
        }
      icon={({size, color}) => (<MaterialCommunityIcons name={iconName} size={size} color={color} />)}
        focused={focused}
        activeTintColor={drawerActiveTintColor}
        inactiveTintColor={drawerInactiveTintColor}
        activeBackgroundColor={drawerActiveBackgroundColor}
        inactiveBackgroundColor={drawerInactiveBackgroundColor}
        allowFontScaling={drawerAllowFontScaling}
        labelStyle={drawerLabelStyle}
        style={drawerItemStyle}
        onPress={onPress}
      />
    );
  }) as React.ReactNode as React.ReactElement;
}
