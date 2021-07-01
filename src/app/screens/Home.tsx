import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View} from 'react-native';
import Container from '../components/Container';
import color from '../theme/color';
import ProgressDialog from '../utils/loader'
import { typography } from '../theme/typography';
import SearchComponent from '../components/composite/SearchComponent';
import MovieComponent from '../components/composite/MovieComponent';
import { get } from '../api/apiRequests';
import showToastMessage from '../utils/showToast';

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
    const [favouriteMovieIds, setfavouriteMovieIds] = useState(["tt0388980"]);

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
   const initiateSearch = async () =>{ 
        console.log("init search..");
        if(searchedWord.length == 0) return;

        setisLoading(true);
        await get(searchedWord)
                    .then((response: any) => {

              let resp = response.data;
              //console.log(resp);
              setisLoading(false);
              if(resp["Response"] === "True"){
                  setMovies([resp]);
                  showToastMessage('success', "bottom", "Hurrah!", "Found your movie! 👋", 1000);
              }else{
                  showToastMessage('error', "bottom", "Error!", resp["Error"]+"", 1000);
                  setMovies([]);
              }

          })
          .catch(errorMessage => {   
              showToastMessage('error', "bottom", "Catch Error!", errorMessage, 1000); 
              setisLoading(false);
              setMovies([]);
          });

        console.log(searchedWord);
   }

   const onSearchWordChange=(word: string)=>{
        setsearchedWord(word);
  }

  const addToFavourites = (movieItem: any) =>{ 
    if(favouriteMovieIds.findIndex(x => x === movieItem.imdbID) == -1){
      favouriteMovieIds.push(movieItem.imdbID);
    }else{
      console.log('already exists');
    }
    console.log("addToFavourites", movieItem.imdbID);
}

  /***815
   * 7.22
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
          <View style={{flex:1, marginBottom: -20, zIndex: 3}}>
              <FlatList
                data={movies}
                renderItem={({ item, index }) => <MovieComponent favourited={(favouriteMovieIds.findIndex(x=> x === item.imdbID) != -1) ? true : false } addToFavourites={(item)=>addToFavourites(item)} movieItem={item} index={index} key={index} />}
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
