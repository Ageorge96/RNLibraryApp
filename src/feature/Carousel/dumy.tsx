import {Text} from '@components/Text';
import {Cover} from '@components/customNative/Cover';
import {faker} from '@faker-js/faker';
import React, {useState} from 'react';
import {Button, StyleSheet, View, Image, FlatList} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated';
import {HomeScreenFlatList} from '../HomeFlatListSection/HomeScreenFlatList';
import {CoverList, wishlistData} from '@src/data/MockData';

const MeasureElement = ({onLayout, children}) => (
  <Animated.ScrollView
    horizontal
    style={marqueeStyles.hidden}
    pointerEvents="box-none">
    <View onLayout={ev => onLayout(ev.nativeEvent.layout.width)}>
      {children}
    </View>
  </Animated.ScrollView>
);

const TranslatedElement = ({index, children, offset, childrenWidth}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      left: (index - 1) * childrenWidth,
      transform: [
        {
          translateX: -offset.value,
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.animatedStyle, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const getIndicesArray = length => Array.from({length}, (_, i) => i);

const Cloner = ({count, renderChild}) => (
  <>{getIndicesArray(count).map(renderChild)}</>
);

const ChildrenScroller = ({
  duration,
  childrenWidth,
  parentWidth,
  reverse,
  children,
}) => {
  const offset = useSharedValue(0);
  const coeff = useSharedValue(reverse ? 1 : -1);

  React.useEffect(() => {
    coeff.value = reverse ? 1 : -1;
  }, [reverse]);

  useFrameCallback(i => {
    offset.value +=
      (coeff.value * ((i.timeSincePreviousFrame ?? 1) * childrenWidth)) /
      duration;
    offset.value = offset.value % childrenWidth;
  }, true);

  const count = Math.round(parentWidth / childrenWidth) + 2;
  const renderChild = index => (
    <TranslatedElement
      key={`clone-${index}`}
      index={index}
      offset={offset}
      childrenWidth={childrenWidth}>
      {children}
    </TranslatedElement>
  );

  return <Cloner count={count} renderChild={renderChild} />;
};

const Marquee = ({duration = 12000, reverse = false, children}) => {
  const [parentWidth, setParentWidth] = React.useState(0);
  const [childrenWidth, setChildrenWidth] = React.useState(0);

  return (
    <View
      style={{width: '100%', height: '100%'}}
      onLayout={ev => {
        setParentWidth(ev.nativeEvent.layout.width);
      }}
      pointerEvents="box-none">
      <View style={marqueeStyles.row} pointerEvents="box-none">
        <MeasureElement onLayout={setChildrenWidth}>{children}</MeasureElement>

        {childrenWidth > 0 && parentWidth > 0 && (
          <ChildrenScroller
            duration={duration}
            parentWidth={parentWidth}
            childrenWidth={childrenWidth}
            reverse={reverse}>
            {children}
          </ChildrenScroller>
        )}
      </View>
    </View>
  );
};

const marqueeStyles = StyleSheet.create({
  hidden: {opacity: 0, zIndex: -1},
  row: {flexDirection: 'row', overflow: 'hidden'},
});

export const DummyScreen = () => {
  const [reverse, setReverse] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.safeArea}>
        <Button onPress={() => setReverse(v => !v)} title="Reverse" />
        <Marquee reverse={reverse}>
          <View style={{flexDirection: 'row'}}>
            {CoverList.map((cover, index)=> (
              <View
                style={{width: 120, height: 250, marginLeft: 5}}
                key={index}>
                <Cover cover={cover} title="d" />
              </View>
            ))}
          </View>
        </Marquee>
      </View>
    </View>
  );
};

const covers = [
  faker.image.url(),
  faker.image.url(),
  faker.image.url(),
  faker.image.url(),
];

const styles = StyleSheet.create({
  horseImage: {
    width: 140,
    height: 80,
    marginRight: 80,
  },
  container: {
    flex: 1,
    width: '100%',
  },
  safeArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  animatedStyle: {
    position: 'absolute',
  },
  circle: {
    marginTop: 4,
    borderRadius: 100,
    height: 120,
    width: 160,
    backgroundColor: '#b58df1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
