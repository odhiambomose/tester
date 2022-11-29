import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image ,ScrollView} from "react-native";
import React, { useState } from "react";
import { firebase } from "../../config";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import GoogleScreen from "./GoogleScreen";
import GoogleSignIn from "./GoogleSignIn";
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSecureEntry,setIsSecureEntry]=useState(true)

    const loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
               navigation.navigate("Home")
            alert("successfully loged in")
        } catch (error) {
            alert(error.message)
        }
    }
    return (

        // <View>

            <View style={styles.container}>
                <View style={styles.login} >
                        <Text style={{color:"white"}}>WELCOME BACK...</Text>
                    </View>
                <View>
                    <Image
                        style={styles.stretch}
                        source={require('../../assets/splash1.png')}
                    />
                </View>



                <ScrollView
                    style={{ flex: 1, width: '100%' }}
                    keyboardShouldPersistTaps="always">
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        placeholderTextColor="#AAAAAA"
                        onChangeText={(text) => setEmail(text)}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <View>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#AAAAAA"
                        secureTextEntry={isSecureEntry}

                        placeholder='Password'
                        onChangeText={(text) => setPassword(text)}
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
                        onPress={() => loginUser(email, password)}>
                        <Text style={styles.buttonTitle}>Log in</Text>
                    </TouchableOpacity>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Don't have an account? <Text onPress={() => navigation.navigate("Register")} style={styles.footerLink}>Sign up</Text></Text>
                    </View>
                    <View style={{marginLeft:95}}>
                        <GoogleSignIn/>
                    </View>



                </ScrollView>
            </View>
        // </View>
    )
}
export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position:"relative"
    },
    title: {
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#EC0921',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2E2E2D'
    },
    footerLink: {
        color: "#EC0921",
        fontWeight: "bold",
        fontSize: 16
    },

    stretch: {
        width: 200,
        height: 150,
        color: "#EC0921",
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
    viewTouch:{
        position:"relative"
      
      },
      touchable:{
        position:"absolute",
        top:"35%",
        
        right:35,
        
      },

})
