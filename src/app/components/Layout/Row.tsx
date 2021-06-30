import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';

const Row : React.FC<ViewProps> = ({children, style, ...props}) => (
  <View style={[styles.row, style]} {...props}>
    {children}
  </View>
);
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
});

export default Row;