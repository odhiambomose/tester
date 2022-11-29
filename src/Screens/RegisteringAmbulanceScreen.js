import React, { useEffect, useState } from 'react'
import { View,Text,TextInput,StyleSheet,TouchableOpacity, Keyboard,ScrollView } from 'react-native'
import { db } from '../../firebase'
import { addDoc, collection } from "firebase/firestore"; 


const RegisteringAmbulanceScreen = () => {

const [message,setMessage]=useState("")
const [color,setColor]=useState("")
  const [formData,setFormData]=useState({

    patientsName:"",
     phone:"",
     amount:""

  })


  async function Register(){
    try {
      await addDoc(collection(db, "patientsDetails"), formData);
    
      setMessage("Ambulance registered succesfully");
      setColor("#0000")
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  
    const url = "https://mpesa.onrender.com/api/stk/push"
  
    const options={
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(formData)
     }
       fetch(url,options)
     .then(res=>res.json())
     .then(data=>data)
  
  
     .catch(error=>{
      console.log(error)
  })
  }


  return (
    <ScrollView>
    <View >

      <View  style={styles.block}>
      <Text style={{textAlign:"center",margin:0,fontSize:30,paddingBottom:12,color:"white"}}>Register Ambulance</Text>
      </View>


      <View style={styles.curve}>
        <Text style={{textAlign:"center",marginTop:10,marginLeft:10,marginRight:10,marginTop:20,paddingTop:15,paddingBottom:15,color:color,fontSize:20}} >{message}</Text>
      </View>
<View>
<TextInput
          style={styles.input}
          placeholderTextColor="#AAAAAA"
          
          placeholder="Patients Name"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={(text)=>setFormData(prev=>({...prev,patientsName:text}))}
          
        />

<TextInput
          style={styles.input}
          placeholderTextColor="#AAAAAA"
          
          placeholder="amont"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChange={(e)=>console.log(e.target)}
          onChangeText={(text)=>setFormData(prev=>({...prev,amount:text}))}



        />
      
      
        <TextInput
          style={styles.input}
          placeholderTextColor="#AAAAAA"
          
          placeholder="Phone Number"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          onChangeText={(text)=>setFormData(prev=>({...prev,phone:text}))}


        />


<TouchableOpacity
          style={styles.button}
          onPress={Register}
        >
          <Text style={styles.buttonTitle}>Book with Mpesa</Text>
        </TouchableOpacity>

</View>


    </View>
    </ScrollView>
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
    backgroundColor: "#EC0921",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTitle:{
    color:"#fff"
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

export default RegisteringAmbulanceScreen
