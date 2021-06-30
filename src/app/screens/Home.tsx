import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import Container from '../components/Container';
import color from '../theme/color';
import { typography } from '../theme/typography';

const Home = (props : any) => {
    const user = auth().currentUser;
    //const [mountedOnce, setmountedOnce] = useState(false);

    useEffect(() => {

        const unsubscribe = props.navigation.addListener('focus', () => {
            
            //if(mountedOnce)

            console.log('Home Screen is focused');
            // The screen is focused
            // Call any action
            //data loading from store
          });
          console.log("Home mounted..")
          //setmountedOnce(true);
          // Return the function to unsubscribe from the event so it gets removed on unmount
          return unsubscribe;
   }, []);

    return (
        <Container style={styles.screen}>
            <Text style={styles.title}>You're Logged In</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.navyFade
    },
    title: {
      fontSize: 25,
      marginBottom: 30,
      color: color.white,
      fontFamily: typography.ubuntuRegular
    },
    image: {
      height: 150,
      width: 150,
      borderRadius: 150,
      marginBottom: 20,
    },
    text: {
      fontSize: 20,
    },
  });

export default Home
