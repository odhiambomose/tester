import React from 'react';
import { Button } from 'react-native';
import { Auth } from 'firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { View } from 'react-native-animatable';


function GoogleSignIn() {

  GoogleSignin.configure({
    webClientId: '260030010824-17vnf8vmm2uqbd5448am5g5ol4632kjc.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    const user_sign_in= auth().signInWithCredential(googleCredential);


    user_sign_in.then((user)=>{
      console.log(user)
    })
    .catch((error)=>{
console.log(error)
    })
  }


  


  return (
  
<View>
<GoogleSigninButton
  style={{ width: 200, height: 48 }}
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
  // disabled={this.state.isSigninInProgress}
/>
</View>
  );
}

export default GoogleSignIn