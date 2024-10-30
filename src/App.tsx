import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigation} from '@src/navigation/Navigator';
import {Provider as ReduxProvider} from 'react-redux';
import store from './feature/store/store';

const styles = StyleSheet({
  safeArea: {flex: 1, backgroundColor: 'black'},
});

export const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ReduxProvider store={store}>
        <Navigation />
      </ReduxProvider>
    </SafeAreaView>
  );
};
