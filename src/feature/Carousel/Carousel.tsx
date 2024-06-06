import {Cover} from '@components/index';
import {faker} from '@faker-js/faker';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated';

const MeasureElement = ({onLayout, children}) => (
  <Animated.ScrollView horizontal style={styles} pointerEvents="box-none">
    <View onLayout={en => onLayout(en.nativeEvent.layout.width)}>
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
  return <Animated.View>{children}</Animated.View>;
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

  useEffect(() => {
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

export const Carousel = () => (
  <View
    style={{
      flex: 1,
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    }}>
    <Marquee>
      <Cover cover={faker.image.url()} title="dw" />
    </Marquee>
  </View>
);

const Marquee = ({duration = 2000, reverse = false, children}) => {
  const [parentWidth, setParentWidth] = useState();
  const [childrenWidth, setChildrenWidth] = useState();

  return (
    <View
      style={{width: '100%', height: '100%'}}
      onLayout={en => {
        setParentWidth(en.nativeEvent.layout.width);
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

// const Marquee = ({duration,
//   reverse,
//   children,
//   style?,
// }) => {
//   const [parentWidth, setParentWidth] = useState();
//   const [childrenWidth, setChildrenWidth] = useState();

//   return (
//     <View
//       style={}
//       onLayout={en => {
//         setParentWidth(en.nativeEvent.layout.width);
//       }}
//       pointerEvents="box-none">
//       <View style={} pointerEvents="box-none">
//         <MeasureElement onLayout={setChildrenWidth}>{children}</MeasureElement>

//         {childrenWidth > 0 && parentWidth > 0 && (
//           <ChildrenScroller
//             duration={duration}
//             parentWidth={parentWidth}
//             childrenWidth={childrenWidth}
//             reverse={reverse}>
//             {children}
//           </ChildrenScroller>
//         )}
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({});

const marqueeStyles = StyleSheet.create({
  hidden: {opacity: 0, zIndex: -1},
  row: {flexDirection: 'row', overflow: 'hidden'},
});
