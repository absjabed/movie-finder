import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../../theme/color';
import { typography } from '../../theme/typography';
import AppText from '../Text';

type Props = {
    addOrRemove: (item: any) => void;
    movieItem: any;
    favourited: boolean,
    index: number;
  };

const MovieComponent = ({addOrRemove, index, movieItem, favourited}: Props) => {
  return (
    <View style={{ ...styles.cardShadow, ...styles.container}} key={index} >
        <View style={styles.cardInnerContainer}>
        <AppText style={styles.title}>{movieItem.Title}</AppText>
        <AppText style={styles.released} >Released : {movieItem.Released}</AppText>
        {movieItem.Poster ? (<View>
                <Image style={styles.image}  source={{uri:movieItem.Poster}} />
                </View>) : <></>}
        <AppText style={styles.genre} >"{movieItem.Genre}"</AppText>
            <Icon onPress={()=> addOrRemove(movieItem)} style={{position:'absolute', right:0, top: 0}} name={favourited ? "heart" : "heart-o"} size={20} color={Colors.red} />
                <AppText style={styles.released} >Rating : {movieItem.imdbRating}</AppText>
                <Rating 
                    tintColor={Colors.navyFade}
                    readonly
                    type='custom'
                    imageSize={15} 
                    startingValue={+movieItem.imdbRating}
                    ratingCount={10} 
                    style={{ paddingVertical: 10 }}
                    ratingBackgroundColor={Colors.lightGray}
                    ratingColor={Colors.yellow} 
                    fractions={1} />
        </View>
    </View>
  );
};

export default MovieComponent;

const styles = StyleSheet.create({
  container: {
    flex:1, 
    flexDirection:'row', 
    backgroundColor: Colors.navyFade, 
    width: "100%",
    padding:10, 
    borderRadius:10, 
    marginBottom: 10
  },
  cardInnerContainer:{
    flexDirection:'column', 
    width:'100%', 
    justifyContent:'center', 
    alignItems:'center'
  },
  title:{
    backgroundColor: Colors.blue, 
    borderRadius:7, 
    justifyContent:'flex-start',  
    fontFamily: typography.ubuntuMedium, 
    padding:5, 
    color: Colors.white, 
    alignSelf:'center'
  },
  released: {
    fontSize:13, 
    padding:2, 
    textAlign:'center', 
    fontFamily:typography.ubuntuMedium, 
    paddingTop:5, 
    color: Colors.white
  },
  genre: {
    fontSize: 14, 
    padding:2, 
    textAlign:'center', 
    fontFamily:typography.ubuntuMediumItalic, 
    color: Colors.white
  },
  cardShadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 3,

    borderWidth:0.3,
    borderRadius:10,
    borderColor: Colors.navy
  },
  image: {
    width: 250,
    height: 250,
    position:'relative',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    borderColor: Colors.navyWhitish,
    alignSelf:'center',
  },
});
