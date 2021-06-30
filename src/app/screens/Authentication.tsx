import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import color from '../theme/color';
import { typography } from '../theme/typography';

const Authentication = (props: any) => {
  return (
    <View style={styles.screen}>
      <Image source={require("../../assets/images/app_init_android.png")} style={styles.image} />
      <Text style={styles.titleTxt}>Movie Finder</Text>

      <Text style={styles.title}>SignIn with Google</Text>
      <GoogleSigninButton size={GoogleSigninButton.Size.Standard} color={GoogleSigninButton.Color.Dark} onPress={props.onGoogleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.navy
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 7,
    marginBottom: 20,
    alignSelf:'center'
  },
  titleTxt:{
    fontSize: 25,
    color: color.white,
    fontFamily: typography.ubuntuBold,
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    color: color.white,
    fontFamily: typography.ubuntuRegular
  },
});


export default Authentication;
