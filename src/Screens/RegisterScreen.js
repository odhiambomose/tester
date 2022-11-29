import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  ScrollView
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { firebase } from "../../config";

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const [isSecureEntry,setIsSecureEntry]=useState(true)
  const registerUser = async (email, password, fullName) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://otptest-6d798.firebaseapp.com",
          })
          .then(() => {
            alert("verification sent to the email");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                fullName,
                email,
              });
          })
          .catch(() => {
            alert(error.message);
          });
      })
      .catch((error => {
        alert(error.message);
      }));
  };
  return (
    <View style={styles.container}>

<View style={styles.login} >
                        <Text style={{color:"white"}}>PLEASE CREATE AN ACCOUNT...</Text>
                    </View>

<View>
<Image
        style={styles.stretch}
        source={require('../../assets/splash1.png')}
      />
</View>

      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        {/* <Image style={styles.img} source={require("../../assets/booking.jpg")} /> */}
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#AAAAAA"
          onChangeText={(fullName) => setFullName(fullName)}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#AAAAAA"
          onChangeText={(email) => setEmail(email)}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

<View style={styles.viewTouch}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#AAAAAA"
          secureTextEntry={isSecureEntry}
         
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
    <TouchableOpacity
            onPress={()=>{
              setIsSecureEntry((prev)=>!prev)
            }}
style={styles.touchable}
            
            >
              <Text>{isSecureEntry?"Hide":"Show"}</Text>
            </TouchableOpacity>
</View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => registerUser(email, password, fullName)}
        >
          <Text style={styles.buttonTitle}>Create account</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{" "}
            <Text style={styles.footerLink} onPress={()=>navigation.navigate("Login")}>
              Log in
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position:"relative"
  },
  title: {},
  logo: {
    flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: "#EC0921",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2E2E2D",
  },
  footerLink: {
    color: "#EC0921",
    fontWeight: "bold",
    fontSize: 16,
  },
  stretch: {
    width: 200,
    height: 150,
    color:"#EC0921",
    marginTop: 95

  },
  login:{
    backgroundColor:"#EC0921",
    height:"6%",
    // width:"15%",
    paddingTop:6,
paddingBottom:6,
paddingLeft:6,
paddingRight:85,
marginTop:7,
position:"absolute",
left:0,
marginBottom:20,
borderBottomRightRadius:4,
borderTopRightRadius:4

},
touchable:{
  position:"absolute",
  top:"35%",
  
  right:35,
  
},
viewTouch:{
  position:"relative"

}


  
 

})