import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Colors from '../../theme/color';
import Row from '../../components/Layout/Row';
import AppButton from '../Button';
import AppTextInput from '../TextInput';


type Props = {
    initiateSearch: () => void;
    onSearchWordChange: (word: string) => void;
    searchedWord: string;
  };

const SearchComponent = ({initiateSearch, onSearchWordChange, searchedWord}: Props) => {
  return (
    <Row style={styles.container}>
        <View style={styles.inputContainer}>
            <AppTextInput
                placeholder="Search Movie"
                value={searchedWord}
                onChangeText={(value: string)=> onSearchWordChange(value)}
                showSoftInputOnFocus={true}
            />
        </View>
        <View style={styles.buttonStyle}>
            <AppButton onPress={()=>  initiateSearch()} title="Search"></AppButton>
        </View>
        <Icon style={styles.iconStyle} name="search" size={20} color={Colors.lightGray} />
    </Row>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    display:'flex', 
    flexDirection:'row', 
    width:'100%', 
    justifyContent:'center', 
    alignContent:'center', 
    alignItems:'center'
  },
  buttonStyle:{
      paddingBottom:10, 
      justifyContent:'center', 
      alignItems:'center'
    },
  iconStyle: {
      position:'absolute', 
      right:135, 
      bottom:15
    },
    inputContainer:{
      width:'80%', 
      marginLeft: 25,
      paddingLeft: 3
    }
});
