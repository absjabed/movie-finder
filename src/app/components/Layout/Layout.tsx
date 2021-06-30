import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const Layout = (props: any) => {
  return <View style={styles.screen}>{props.children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontFamily: 'Ubuntu-Regular',
  },
});

export default Layout;