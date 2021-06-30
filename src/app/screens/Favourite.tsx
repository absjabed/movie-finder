import React, { useEffect } from 'react'
import Text from '../components/Text'
import Container from '../components/Container';
import { StyleSheet } from 'react-native';
import color from '../theme/color';
import { typography } from '../theme/typography';

const Favourite = (props: any) => {

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            console.log('Favourite Screen is focused');
            // The screen is focused
            // Call any action
          });
        console.log("Favourite mounted..")
        
        return unsubscribe;
    }, []);

    return (
        <Container style={styles.screen}>
            <Text style={styles.title}>This is favourite</Text>
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

export default Favourite
