import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import Authentication from './src/app/screens/Authentication';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import * as constKVP from './src/app/utils/constKVP'
import ProgressDialog from './src/app/utils/loader'
import AppNavigations from './src/app/navigations/AppNavigations';
import Layout from './src/app/components/Layout/Layout';
import Header from './src/app/components/Layout/Header';

export const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
    GoogleSignin.configure({
      webClientId:
        constKVP.__Google_SignIn_Key
    });
  }, []);

  async function onGoogleButtonPress() {
    setisLoading(true);
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    //console.log('idtkn',idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //console.log('cred',googleCredential);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  auth().onAuthStateChanged((user) => {
    console.log("auth changed");
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
    setisLoading(false);
  });

  if (authenticated) {
    return (<NavigationContainer>
              <ProgressDialog loading={isLoading} />
              <Layout>
                <Header headerTxt="Movie Finder"/>
                <AppNavigations/>
              </Layout>
           </NavigationContainer>);
  }
  return <Authentication onGoogleButtonPress={onGoogleButtonPress} />;
}

const ToastContainer = () => {
  return <>
    <App/>
    {process.env.JEST_WORKER_ID  ?? (<Toast ref={(ref) => Toast.setRef(ref)} />)}
  </>;
}

export default ToastContainer;