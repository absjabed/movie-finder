import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const Container: React.FC<ViewProps> = ({children, style, ...props}) => (
  <View style={[styles.container, style]} {...props}>
    {children}
  </View>
);

export default Container;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 30,
  },
});
