import React,{useEffect, useState} from 'react'
import { Text, View,StyleSheet,ScrollView,TouchableOpacity } from 'react-native'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'



const RegisterationHistory=({navigation})=> {

const [fetchData,setFetchData]=useState([])

    useEffect(()=>{
        const fetchQuotes = async()=>{
            const querySnapshot = await getDocs(collection(db, "ambulances"));
            querySnapshot.forEach((doc) => {
              setFetchData(prev=>([...prev, doc.data()]));
            });

        }

        fetchQuotes()

    },[])
useEffect(()=>{
    // console.log(fetchData)

},[fetchData])

    return (
        <ScrollView>
      <View style={{flex:1,justifyContent:"center",marginLeft:30,}}>
 {
    fetchData.map(item=>{
        return(
            <View style={styles.container}>
                <Text style={{textAlign:"center"}}>Driver: {item.driver}</Text>
                <Text  style={{textAlign:"center"}}>Hospital: {item.hospital}</Text>
                <Text style={{textAlign:"center"}}>Location :{item.location}</Text>
                <Text style={{textAlign:"center"}}>Plate :{item.plate}</Text>
                <Text style={{textAlign:"center"}}>PhoneNo :{item.phoneNo}</Text>


                <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate("registerambulance")}
        >
          <Text style={styles.buttonTitle}>Book Now</Text>
        </TouchableOpacity>


            </View>
        )
    })
} 

      </View>
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    container:{

        height:150,
        width:"80%",
        backgroundColor:"white",
        borderRadius:15,
        padding:10,
        elevation:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
        textAlign:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10,
        paddingTop:50,
        paddingBottom:50,
        
        

},
button: {
    backgroundColor: "#EC0921",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom:10,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle:{
    color:"#fff"
  }
  })


export default RegisterationHistory
