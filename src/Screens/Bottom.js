// import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { Text, Pressable, View, ScrollView ,StyleSheet,Image,TouchableOpacity} from "react-native";
import BottomSheet from "react-native-easy-bottomsheet";
import { FlatList } from "react-native-gesture-handler";
import {carTypeData} from "./data"

const Bottom = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <BottomSheet
        bottomSheetTitle={"Available Ambulances"}
        bottomSheetIconColor="#0A2463"
        bottomSheetStyle={{
          backgroundColor: "white",
          maxHeight: "70%",
          minHeight: "50%",
        }}
        bottomSheetTitleStyle={{color: '#0A2463'}}
        onRequestClose={() => setVisible(!isVisible)}
        bottomSheetVisible={isVisible}
      >
          <View>
          
    
          <View>
            
            
            {/* <Image
                        style={styles.stretch}
                        source={carTypeData.data.image}
                    /> */}
      <FlatList
      data={carTypeData}
      renderItem={item=>{
        
        return (
<View style={{padding:42}}>
          <Text style={{fontWeight:"bold",fontSize:30,color:"red"}}>{item.item.title}</Text>
    
          <FlatList
          data={item.item.data}
          renderItem={item2=>{
            console.log(item2.item.price)
            return (
                <TouchableOpacity>
              <View style={{display:"flex",flexDirection:"row",paddingTop:30,paddingBottom:30,justifyContent:"space-between",alignItems:"center"}}>
                <Image source={item2.item.image}  style={styles.img1}/>
              <View style={{display:"flex",flexDirection:"column"}}>
                <Text style={{fontWeight:"bold",fontSize:20}}>{item2.item.name}</Text>
                <Text>{item2.item.time}</Text>
                <Text>{item2.item.note}</Text>
                </View>
                
  <View>
  <Text style={{color:"green",fontWeight:"bold",fontSize:20}}>Ksh {item2.item.promotion}</Text>
  <Text>Ksh {item2.item.price}</Text>


                </View>
              </View>
                </TouchableOpacity>
            )
          }}
          />
          </View>
        )

          
        

        
      }}
      />
          </View>
        
      


          </View>
      </BottomSheet>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show BottomSheet</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#3E92CC",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  img1:{
    width:"20%",
    height:"100%"
    
  }
});

export default Bottom;