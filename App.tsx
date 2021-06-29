import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import Authentication from './src/app/screens/Authentication';
import SplashScreen from 'react-native-splash-screen';
import Authenticated from './src/app/screens/Authenticated';

export const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
    GoogleSignin.configure({
      webClientId:
        '840761338214-o2qpgivad4gfthuct8emacf4hmiatqeg.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    console.log('idtkn',idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('cred',googleCredential);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  if (authenticated) {
    return <Authenticated />;
  }

  return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
}


export default App;