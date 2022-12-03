import React, { useEffect, useState } from 'react';
import { Text, View} from 'react-native';
import { firebase } from "../../config";

export default function ProfileScreen() {
  const { name, setName } = useState([]);

  useEffect(()=>{
    firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid).get()
    .then((snapshot)=>{
        // console.log(snapshot)
        if(snapshot.exists){
            setName(snapshot.data())
            console.log(snapshot.data())
        }
        else{
            console.log('user does not exist')
        }
    })
  },[])
  return (
      <View>
      <Text>Welcome {name.email}!</Text>
    </View>
  );
}