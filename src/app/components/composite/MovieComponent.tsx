import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../../theme/color';
import Colors from '../../theme/color';
import { typography } from '../../theme/typography';
import AppText from '../Text';

type Props = {
    addToFavourites: (item: any) => void;
    movieItem: any;
    favourited: boolean,
    index: number;
  };

const MovieComponent = ({addToFavourites, index, movieItem, favourited}: Props) => {
  return (
    <View style={{ ...styles.cardShadow, ...styles.container}} key={index} >
        <View style={{flexDirection:'column', width:'100%', justifyContent:'center', alignItems:'center'}}>
        <Text style={{backgroundColor: Colors.blue, borderRadius:7, justifyContent:'flex-start',  fontFamily: typography.ubuntuMedium, padding:5, color: Colors.white, alignSelf:'center'}}>{movieItem.Title}</Text>
        {movieItem.Poster ? (<View>
                <Image style={styles.image}  source={{uri:movieItem.Poster}} />
                </View>) : <></>}
        <AppText style={{fontSize: 14, padding:2, textAlign:'center', fontFamily:'Ubuntu-MediumItalic', color: Colors.white}} >"{movieItem.Genre}"</AppText>
        
        <AppText style={{fontSize:13, padding:2, textAlign:'center', fontFamily:'Ubuntu-Regular', paddingTop:5, color: Colors.white}} >Released : {movieItem.Released}</AppText>
            <Icon onPress={()=> addToFavourites(movieItem)} style={{position:'absolute', right:0, top: 0}} name={favourited ? "heart" : "heart-o"} size={20} color={Colors.red} />
                <AppText style={{fontSize:13, padding:2, textAlign:'center', fontFamily:'Ubuntu-Regular', paddingTop:5, color: Colors.white}} >Rating : {movieItem.imdbRating}</AppText>
                <Rating 
                    readonly
                    type='custom'
                    imageSize={15} 
                    startingValue={+movieItem.imdbRating}
                    ratingCount={10} 
                    style={{ paddingVertical: 10 }}
                    ratingBackgroundColor={Colors.lightGray}
                    ratingColor={color.navy} 
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
    backgroundColor: Colors.navy, 
    width: "100%",
    padding:10, 
    borderRadius:10, 
    marginBottom: 10
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
    borderColor: Colors.navyWhitish
  },
  image: {
    //...StyleSheet.absoluteFillObject,
    width: 300,
    height: 300,
    position:'relative',
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    borderColor: "white",
    alignSelf:'center',
  },
});
