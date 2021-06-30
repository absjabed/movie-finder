import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';
import { typography } from '../theme/typography';


const AppText : React.FC<TextProps> = (props) => {
  return (
    <Text style={[styles.text, props.style]} {...props}>
      {props.children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontFamily: typography.ubuntuRegular
  },
});
