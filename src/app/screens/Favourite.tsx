import React, { useEffect, useState } from 'react'
import Text from '../components/Text'
import Container from '../components/Container';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import Colors from '../theme/color';
import { typography } from '../theme/typography';
import { GetAllFavouriteMovies, removeFavouriteMovieItem } from '../utils/asyncStorageUtils';
import MovieComponent from '../components/composite/MovieComponent';
import FavouriteMovie from '../components/composite/FavouriteMovie';

const Favourite = (props: any) => {
  const [favouriteMovies, setfavouriteMovies] = useState(new Array());

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', async () => {

          let allFavouriteMovies = await GetAllFavouriteMovies();
              setfavouriteMovies(allFavouriteMovies);
            console.log('Favourite Screen is focused');
            // The screen is focused
            // Call any action
          });
        console.log("Favourite mounted..")
        
        return unsubscribe;
    }, []);

    const removeMoviesFromFavourites = async (movieItem: any) =>{
        /**Check if this movie is already in favourited movie list and get it's index */
        let index = favouriteMovies.findIndex(x => x.imdbID === movieItem.imdbID);

        /**movie already exists so the movie will be removed */
        favouriteMovies.splice(index, 1);
          
        /**Updating current state for movie removal*/
        setfavouriteMovies([...favouriteMovies]);
        
        /** Store or remove the movie from local storage*/
        await removeFavouriteMovieItem(movieItem);
    }

    return (
      <Container style={styles.screen}>
        <View style={{flex:1, marginBottom: -20, zIndex: 3}}>
            <FlatList
              data={favouriteMovies}
              renderItem={({ item, index }) => <FavouriteMovie addOrRemove={(item)=>removeMoviesFromFavourites(item)} movieItem={item} index={index} key={index} />}
              keyExtractor={(item, index) => `${index}`}
              ListEmptyComponent={
                <View style={styles.noInfo}> 
                  <Image resizeMode="stretch" style={styles.nonimage} source={require('../../assets/images/app_init_android.png')} />
                  <Text style={styles.noInfoTxt}>Don't you have any favourite movies?</Text>
                </View>}
              contentContainerStyle={{padding: 10}} 
              />
        </View>
      <Image resizeMode="stretch" style={styles.image} source={require('../../assets/images/scrwave.png')} />
    </Container>
    )
}


const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.navyFade
    },
    title: {
      fontSize: 25,
      marginBottom: 30,
      color: Colors.white,
      fontFamily: typography.ubuntuRegular
    },
    image: {
      width: "120%",
      bottom:0,
      position:'absolute',
      height: 100,
      borderWidth: 1,
      opacity: 1,
      zIndex: -5, // works on ios
      //elevation: 3, // works on android
      alignSelf:'center',
    },
    text: {
      fontSize: 20,
    },
    noInfo:{
      flex: 1,
      flexDirection:'column', 
      paddingTop:'50%', 
      justifyContent:'center', 
      alignItems:'center'
    },
    noInfoTxt: {
      fontSize: 18,  
      fontFamily:typography.ubuntuBold, 
      color: Colors.lightGray,
      textAlign: "center"
    },
    nonimage: {
      width: 80,
      height: 80,
      borderRadius: 25,
      opacity: .8,
      margin: 5,
    },
  });

export default Favourite
