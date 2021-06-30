import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View} from 'react-native';
import Container from '../components/Container';
import color from '../theme/color';
import ProgressDialog from '../utils/loader'
import { typography } from '../theme/typography';
import SearchComponent from '../components/composite/SearchComponent';
import MovieComponent from '../components/composite/MovieComponent';

const Home = (props : any) => {
    const [searchedWord, setsearchedWord] = useState("");
    const [movies, setMovies] = useState([
      {"Title":"Frozen","Year":"2013","Rated":"PG","Released":"27 Nov 2013","Runtime":"102 min","Genre":"Animation, Adventure, Comedy, Family, Fantasy, Musical","Director":"Chris Buck, Jennifer Lee","Writer":"Jennifer Lee (screenplay by), Hans Christian Andersen (story inspired by: \"The Snow Queen\" by), Chris Buck (story by), Jennifer Lee (story by), Shane Morris (story by)","Actors":"Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad","Plot":"When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.","Language":"English, Norwegian","Country":"USA, Norway","Awards":"Won 2 Oscars. Another 79 wins & 60 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"7.4","imdbVotes":"582,632","imdbID":"tt2294629","Type":"movie","DVD":"15 Nov 2015","BoxOffice":"$400,953,009","Production":"Walt Disney Animation","Website":"N/A","Response":"True"}
    ]);
    const [isLoading, setisLoading] = useState(false);

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
  //https://www.npmjs.com/package/react-native-ratings
   const initiateSearch = () =>{ 
        console.log("init search..");
        console.log(searchedWord);
   }

   const onSearchWordChange=(word: string)=>{
        setsearchedWord(word);
  }

  const addToFavourites = (movieItem: any) =>{ 
    console.log("addToFavourites", movieItem);
}

  /***
   *  Title
ii. Genres [with comma separators]
iii. Release dates
iv. IMDB Rating
v. Poster
   * 
   */

    return (
        <Container style={styles.screen}>
          <ProgressDialog loading={isLoading} />
          <View style={styles.searchContainer}>
            <SearchComponent initiateSearch={initiateSearch} searchedWord={searchedWord} onSearchWordChange={(word)=>onSearchWordChange(word)} />
          </View>
          <View style={{flex:1, marginBottom: -110, zIndex: 3}}>
              <FlatList
                data={movies}
                renderItem={({ item, index }) => <MovieComponent addToFavourites={(item)=>addToFavourites(item)} movieItem={item} index={index} key={index} />}
                keyExtractor={(item, index) => `${index}`}
                ListEmptyComponent={
                                            <View style={{flexDirection:'row', paddingTop:'50%', justifyContent:'center', alignItems:'center'}}> 
                                                <Text style={{fontSize: 18,  fontFamily:'Ubuntu-Bold', color: color.lightGray}} >No Info Available</Text>
                                            </View>}
                contentContainerStyle={{padding: 10}} 
                />
          </View>
            {/* <Text style={styles.title}>You're Logged In</Text> */}
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
    searchContainer:{
      marginTop: -5
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
