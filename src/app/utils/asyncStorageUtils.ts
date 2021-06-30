import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeWordItem(key: string, item: any) {
    try {
        const existingTypesWord: any =  await AsyncStorage.getItem(key);
        let wordArr = JSON.parse(existingTypesWord);

        if(wordArr === null || undefined){
          //first time this type data ( wordArr) is null for specific key type
          // so create empty array and push the data to the array
          wordArr = [];
          wordArr.push(item);
          
          // store the array with type as key
          await AsyncStorage.setItem(key, JSON.stringify(wordArr));
        }else{
          
          // const objectHash = getUniqueHash(item);
          // const index = wordArr.findIndex((item: any, i: any)=>{
          //   return item.hash === objectHash
          // });

          //if current object doesn't exists in save the object
          //otherwise saving dosen't required...
          //if(index >= 0) return; //object already exists
              
          wordArr.push(item);
          await AsyncStorage.setItem(key, JSON.stringify(wordArr));
        }
        //console.log('wordarr',wordArr)
        
    } catch (error: any) {
      console.log(error.message);
    }
  }

export async function removeFavouriteWordItem(key: string, word: string, hashString: string) {
    try {
        const existingTypesWord: any =  await AsyncStorage.getItem(key);
        let wordArr = JSON.parse(existingTypesWord);
        
        if(wordArr !== null || undefined){

           const index = wordArr.findIndex((item: any, i: any)=>{
            return item.hash === hashString && item.word === word;
          });

          if (index !== -1){
            //remove specific word from favourite...  
            wordArr.splice(index, 1);
            await AsyncStorage.setItem(key, JSON.stringify(wordArr));            
          }
        }
    } catch (error: any) {
      console.log(error.message);
    }
  }

export async function getAllStorageKeys(){
    let keys = await AsyncStorage.getAllKeys();
    return keys;
}


export async function retrieveWords(key: string) {
    try {
      if(!key) return;
      const retrievedItems: any =  await AsyncStorage.getItem(key);
      //console.log(retrievedItems)
      return JSON.parse(retrievedItems);
    } catch (error: any) {
      console.log(error.message);
    }
    return;
  }