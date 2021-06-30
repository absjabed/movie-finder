import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const Favourite = (props: any) => {

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            console.log('Favourite Screen is focused');
            // The screen is focused
            // Call any action
          });
        console.log("Favourite mounted..")
        
        return unsubscribe;
    }, []);

    return (
        <View>
            <Text>This is favourite</Text>
        </View>
    )
}

export default Favourite
