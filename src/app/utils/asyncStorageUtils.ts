import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { _FAVOURITE_MOVIES_KEY } from './constKVP';

/**Get current loggedin user */
const user = auth().currentUser;

export async function storeMovieItem(item: any) {
    try {
        /**Unique user id to save their data locally */
        console.log("uid",_FAVOURITE_MOVIES_KEY+"_"+user?.uid)
        /***Get all the favourite movies from local storage */
        const favouriteMovies: any =  await AsyncStorage.getItem(_FAVOURITE_MOVIES_KEY+"_"+user?.uid);
        let movieArr = JSON.parse(favouriteMovies);
        //console.log('existing', movieArr);

        if(movieArr === null || undefined){
          /**favourite movie list is null
           * so new movie will be added
           */
          console.log('add movie to local store when null');
          movieArr = [];
          movieArr.push(item);
          
        }else{
          
          /**find the index of current movie in faavourite movie array */
          let wordIndex = movieArr.findIndex((x: any) => x.imdbID === item.imdbID);
          
          if(wordIndex >= 0){
              /**The movie already exists in the favourite list
               * so the movie will be removed now
               */
               movieArr.splice(wordIndex, 1);
               //console.log('movie removed from local store', movieArr);
          }else{
            /**This movie yet dosen't exist in 
             * favourite list so the movie will be stored in favourite list
             * */
            movieArr.push(item);
            //console.log('came here', movieArr);
          }
          
        }
        await AsyncStorage.setItem(_FAVOURITE_MOVIES_KEY+"_"+user?.uid, JSON.stringify(movieArr));
        
    } catch (error: any) {
      console.log(error.message);
    }
  }

export async function GetAllFavouriteMovies() {
    try {
        /***Get all the favourite movies from local storage */
        const favouriteMovies: any =  await AsyncStorage.getItem(_FAVOURITE_MOVIES_KEY+"_"+user?.uid);
        let movieArr = JSON.parse(favouriteMovies);
        //console.log('existing', movieArr);

        if(movieArr === null || undefined)  return [];
        
        return movieArr;
        
    } catch (error: any) {
      console.log(error.message);
    }
}

export async function removeFavouriteMovieItem(movieItem: any) {
    try {
        /***Get all the favourite movies from local storage */
        const favouriteMovies: any =  await AsyncStorage.getItem(_FAVOURITE_MOVIES_KEY+"_"+user?.uid);
        let movieArr = JSON.parse(favouriteMovies);
        
        if(movieArr !== null || undefined){

           /**find the index of current movie in faavourite movie array */
          let wordIndex = movieArr.findIndex((x: any) => x.imdbID === movieItem.imdbID);

          if (wordIndex >= 0){
            //remove specific movie from favourite...  
            movieArr.splice(wordIndex, 1);
            await AsyncStorage.setItem(_FAVOURITE_MOVIES_KEY+"_"+user?.uid, JSON.stringify(movieArr));            
          }
        }
    } catch (error: any) {
      console.log(error.message);
    }
  }

export async function GetAllFavouriteMovieIDs() {
    try {
        /***Get all the favourite movies from local storage */
        const favouriteMovies: any =  await AsyncStorage.getItem(_FAVOURITE_MOVIES_KEY+"_"+user?.uid);
        let movieArr = JSON.parse(favouriteMovies);
        
        if(movieArr === null || undefined) return []; //return empty array as there is no favourited movies yet

        /**return favourite movie ids array */
        return movieArr.map((x: any) => x.imdbID+"");
        
    } catch (error: any) {
      console.log(error.message);
    }
  }