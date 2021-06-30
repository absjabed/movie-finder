import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../../theme/color';
import AppText from '../Text';

type Props = {
    addToFavourites: (item: any) => void;
    movieItem: any;
    index: number;
  };

const MovieComponent = ({addToFavourites, index, movieItem}: Props) => {
  return (
    <View style={{ ...styles.cardShadow, ...styles.container}} key={index} >
        <View style={{flexDirection:'column', width:'100%', justifyContent:'center', alignItems:'center'}}>
            <Text style={{backgroundColor: Colors.tealFade, borderRadius:7, justifyContent:'flex-start',  fontFamily:'Ubuntu-Regular', padding:5, color: Colors.white, alignSelf:'center'}}>{movieItem.Title}</Text>
            <Icon onPress={()=> addToFavourites(movieItem)} style={{position:'absolute', right:0, top: 0}} name="heart-o" size={20} color={Colors.redish} />
            <AppText style={{fontSize:12, padding:2, textAlign:'center', fontFamily:'Ubuntu-Regular', paddingTop:5, color: Colors.white}} >{movieItem.definition}</AppText>
            {movieItem.Poster ? (<View>
                <Image style={styles.image}  source={{uri:movieItem.Poster}} />
                </View>) : <></>}
            <AppText style={{fontSize:12, padding:2, textAlign:'center', fontFamily:'Ubuntu-MediumItalic', color: Colors.lightGray}} >"{movieItem.Genre}"</AppText>
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
    borderColor: Colors.lightGray
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
    borderColor: "white",
    alignSelf:'center',
  },
});
