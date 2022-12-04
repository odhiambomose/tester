import React, { useEffect, useState } from 'react'
import { View,Text,TextInput,StyleSheet,TouchableOpacity, Keyboard,ScrollView } from 'react-native'
import { db } from '../../firebase'
// import { addDoc, collection } from "firebase/firestore"; 
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const RegisterDriver = () => {

  const [formData,setFormData]=useState({

    driver:"",
    hospital:"",
    location:"",
    plate:"",
    phoneNo:""

  })

  // const url=


  async function register(){
  firestore().collection("Ambulance").add(formData)
  .then(()=>{
    console.log("Ambulance added")
  })
  .catch(err=>{
    console.log(err)
  })
  
  

  
  
   }




console.log(auth().currentUser)


  
  
return (
    <View >

      <View  style={styles.block}>
      <Text style={{textAlign:"center",margin:0,fontSize:30,paddingBottom:12,color:"white"}}>Register Ambulance</Text>
      </View>


      <View style={styles.curve}>
      </View>
<View>
<TextInput
          style={styles.input}
          placeholderTextColor="#AAAAAA"
          
          placeholder="Drivers Name"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={(text)=>setFormData(prev=>({...prev,driver:text}))}
          
        />

<TextInput
          style={styles.input}
          placeholderTextColor="#AAAAAA"
          
          placeholder="Hospital"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChange={(e)=>console.log(e.target)}
          onChangeText={(text)=>setFormData(prev=>({...prev,hospital:text}))}



        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#AAAAAA"
        
          placeholder="Location"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={(text)=>setFormData(prev=>({...prev,location:text}))}


        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#AAAAAA"
          
          placeholder="Number Plate"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={(text)=>setFormData(prev=>({...prev,plate:text}))}


        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#AAAAAA"
          
          placeholder="Phone Number"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={(text)=>setFormData(prev=>({...prev,phoneNo:text}))}


        />
      


<TouchableOpacity
          style={styles.button}
          onPress={register}
        >
          <Text style={styles.buttonTitle}>Submit</Text>
        </TouchableOpacity>

</View>


    </View>
  )
}



const styles = StyleSheet.create({
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
    backgroundColor: "red",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTitle:{
    color:"white"
  },
  block:{
    backgroundColor:"#EC0921",
    paddingTop:30,
    paddingBottom:30,
  },
  curve:{
    backgroundColor:"#f3f3f3",
    height:"10%",
    borderRadius:100,
    marginTop:-25

  }


  
  })

export default RegisterDriver
