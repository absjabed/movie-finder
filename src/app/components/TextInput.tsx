/*Custom TextInput*/
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../theme/color';
import { typography } from '../theme/typography';
const AppTextInput = (props: any) => {
  return (
    <View
      style={styles.container}>
      <TextInput
        autoCapitalize={"none"}
        underlineColorAndroid={Colors.transparent}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        placeholderTextColor= {Colors.placeholderColor}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        textAlign="left"
        ref={props.refInner}
        blurOnSubmit={false}
        onFocus={props.onFocus}
        showSoftInputOnFocus={props.showSoftInputOnFocus}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={styles.txtInput}
        editable={props.editable}
        value={props.value}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderColor: Colors.gray,
    borderRadius: 7,
    borderWidth: 1,
    height: 40
  },
  txtInput: {
    opacity: 100, 
    textAlign:'auto',
    color: Colors.white, 
    fontFamily:typography.ubuntuRegular,
    paddingHorizontal: 15
  }
})
export default AppTextInput;