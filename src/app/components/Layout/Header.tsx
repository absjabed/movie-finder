import React from 'react';
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Entypo'
import Colors from '../../theme/color';
import { typography } from '../../theme/typography';
const Header = (props: any) => {
  const user = auth().currentUser;

  return (
    <View style={styles.main}>
      <View style={styles.container}>
            <Text style={styles.text}>{props.headerTxt}</Text>

            <View style={{flexDirection: 'column', justifyContent:'center', alignItems:'center', position:'absolute', left: 0}}>
              <Image source={{uri: user?.photoURL+""}} style={styles.image} />
              <Text style={styles.infotext}>{user?.displayName}</Text>
            </View>
            <Pressable onPress={() => auth().signOut()} style={{flexDirection: 'row', justifyContent:'space-between', position:'absolute', right: 0}}>
                <Icon name="log-out" size={25} color={Colors.redish} />
            </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 25,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 0.5,
    backgroundColor: Colors.navyFade,
  },
  container: {
    width: '100%',
    height: 35,
    maxHeight: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 150,
    //marginBottom: 20,
  },
  logout:{
    height: 30,
    width: 30,
    borderRadius: 150,
  },
  infotext: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: typography.ubuntuLight,
    letterSpacing: .5
    
  },
  text: {
    flexDirection: 'row',
    fontSize: 16,
    color: Colors.white,
    fontFamily:typography.ubuntuBold,
    justifyContent: 'center',
    letterSpacing: 1
  },
});

export default Header;