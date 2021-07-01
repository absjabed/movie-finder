import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Container from '../components/Container';
import Colors from '../theme/color';
import ProgressDialog from '../utils/loader'
import { typography } from '../theme/typography';
import SearchComponent from '../components/composite/SearchComponent';
import MovieComponent from '../components/composite/MovieComponent';
import { get } from '../api/apiRequests';
import showToastMessage from '../utils/showToast';
import { GetAllFavouriteMovieIDs, storeMovieItem } from '../utils/asyncStorageUtils';

const Home = (props : any) => {
    const [searchedWord, setsearchedWord] = useState("");
    const [movies, setMovies] = useState(
      [
        {"Title":"Frozen","Year":"2013","Rated":"PG","Released":"27 Nov 2013","Runtime":"102 min","Genre":"Animation, Adventure, Comedy, Family, Fantasy, Musical","Director":"Chris Buck, Jennifer Lee","Writer":"Jennifer Lee (screenplay by), Hans Christian Andersen (story inspired by: \"The Snow Queen\" by), Chris Buck (story by), Jennifer Lee (story by), Shane Morris (story by)","Actors":"Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad","Plot":"When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.","Language":"English, Norwegian","Country":"USA, Norway","Awards":"Won 2 Oscars. Another 79 wins & 60 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"7.4","imdbVotes":"582,632","imdbID":"tt2294629","Type":"movie","DVD":"15 Nov 2015","BoxOffice":"$400,953,009","Production":"Walt Disney Animation","Website":"N/A","Response":"True"},
        {"Title":"The Greatest Game Ever Played","Year":"2005","Rated":"PG","Released":"30 Sep 2005","Runtime":"120 min","Genre":"Biography, Drama, Sport","Director":"Bill Paxton","Writer":"Mark Frost","Actors":"Shia LaBeouf, Stephen Dillane, Elias Koteas","Plot":"In the 1913 US Open, 20-year-old Francis Ouimet played golf against his idol, 1900 US Open champion, Englishman Harry Vardon.","Language":"English","Country":"United States, Canada","Awards":"3 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ4NDk3MDk0NV5BMl5BanBnXkFtZTcwMzk4OTgyMQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"63%"},{"Source":"Metacritic","Value":"55/100"}],"Metascore":"55","imdbRating":"7.4","imdbVotes":"28,782","imdbID":"tt0388980","Type":"movie","DVD":"05 Mar 2016","BoxOffice":"$15,337,393","Production":"Walt Disney Pictures","Website":"N/A","Response":"True"},
        {"Title":"The Great Gatsby","Year":"2013","Rated":"PG-13","Released":"10 May 2013","Runtime":"143 min","Genre":"Drama, Romance","Director":"Baz Luhrmann","Writer":"Baz Luhrmann (screenplay), Craig Pearce (screenplay), F. Scott Fitzgerald (based on the novel by)","Actors":"Lisa Adam, Frank Aldridge, Amitabh Bachchan, Steve Bisley","Plot":"A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.","Language":"English","Country":"Australia, USA","Awards":"Won 2 Oscars. Another 48 wins & 86 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.2/10"},{"Source":"Rotten Tomatoes","Value":"48%"},{"Source":"Metacritic","Value":"55/100"}],"Metascore":"55","imdbRating":"7.2","imdbVotes":"492,067","imdbID":"tt1343092","Type":"movie","DVD":"14 Dec 2015","BoxOffice":"$144,840,419","Production":"Bazmark Films, Red Wagon Entertainment","Website":"N/A","Response":"True"}
    ]
    );
    const [isLoading, setisLoading] = useState(false);
    const [favouriteMovieIds, setfavouriteMovieIds] = useState([""]);

    useEffect(() => {

        const unsubscribe = props.navigation.addListener('focus', async () => {
          
            let allFavouriteMovieIDs = await GetAllFavouriteMovieIDs();
            setfavouriteMovieIds(allFavouriteMovieIDs);
            console.log('Home Screen is focused');
            // The screen is focused
            //data loading from store
          });
          console.log("Home mounted..")
          // Return the function to unsubscribe from the event so it gets removed on unmount
          return unsubscribe;
   }, []);

   const initiateSearch = async () =>{ 
        //console.log("init search..");
        if(searchedWord.length == 0) return;

        setisLoading(true);
        await get(searchedWord)
              .then((response: any) => {
              
              /**Stop loading overley */
              setisLoading(false);
              let resp = response.data;
              
              /**checking if the response is a array or not */
              if(!Array.isArray(resp)){
                  if(resp["Response"] === "True"){
                    /**Movie found */
                    setMovies([resp]);
                    showToastMessage('success', "bottom", "Hurrah!", "Found your movie! 👋", 1000);
                  }else{
                      /**No movie found */
                      showToastMessage('error', "bottom", "Error!", resp["Error"]+"", 1000);
                      setMovies([]);
                  }
              }else{
                /**If the response is an array then add favourited property to each movie */
                setMovies(resp);
                showToastMessage('success', "bottom", "Hurrah!", "Found your movie! 👋", 1000);
              }
              
          })
          .catch(errorMessage => {   
              showToastMessage('error', "bottom", "Catch Error!", errorMessage, 1000); 
              setisLoading(false);
              setMovies([]);
          });
   }

  const addRemoveMoviesToFavourites = async (movieItem: any) =>{ 

        /**Check if this movie is already in favourited movie list */
        let index = favouriteMovieIds.findIndex(x => x === movieItem.imdbID);

        if(index >= 0){
          /**movie already exists so the movie will be removed */
          favouriteMovieIds.splice(index, 1);
        }else{
          /**favourited movie added to the state*/
          favouriteMovieIds.push(movieItem.imdbID);
        }

        /**Updating current state for the movie favourited or removal*/
        setfavouriteMovieIds([...favouriteMovieIds]);

        /** Store or remove the movie from local storage*/
        await storeMovieItem(movieItem);
}

    return (
        <Container style={styles.screen}>
          <ProgressDialog loading={isLoading} />
          <View style={styles.searchContainer}>
            <SearchComponent initiateSearch={()=> initiateSearch()} searchedWord={searchedWord} onSearchWordChange={(word)=>setsearchedWord(word)} />
          </View>
          <View style={{flex:1, marginBottom: -20, zIndex: 3}}>
              <FlatList
                data={movies}
                renderItem={({ item, index }) => <MovieComponent favourited={(favouriteMovieIds.findIndex(x=> x === item.imdbID) >= 0) ? true : false } addOrRemove={(item)=>addRemoveMoviesToFavourites(item)} movieItem={item} index={index} key={index} />}
                keyExtractor={(item, index) => `${index}`}
                ListEmptyComponent={
                  <View style={styles.noInfo}> 
                      <Image resizeMode="stretch" style={styles.nonimage} source={require('../../assets/images/app_init_android.png')} />
                      <Text style={styles.noInfoTxt}>Found nothing for you. Give it another try.</Text>
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
      backgroundColor: Colors.navyFade,
      width: "100%"
    },
    searchContainer:{
      marginTop: -5
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

export default Home
