import React from "react";
import { View,Text ,StyleSheet,ScrollView,Image} from "react-native";
import bleeding from "../../assets/bleeding.png";

const FirstAidScreen=()=>{
    return(
<View>
    <ScrollView>
    <View style={styles.box1}>
        <View>
        <Text style={styles.text1}>Bleeding</Text>
<Text >.Apply direct pressure on the cut or wound with a clean cloth, tissue, or piece of gauze until bleeding stops.</Text>
<Text >If blood soaks through the material, don’t remove it. Put more cloth or gauze on top of it and continue to apply pressure.</Text>

</View>

<View style={styles.border}>
<Image source={bleeding} width={100} height={100}/>

</View>

</View>

<View style={styles.box1}>
        <View>
        <Text style={styles.text1}>Broken Bones/Fracture</Text>
<Text>.Apply direct pressure on the cut or wound with a clean cloth, tissue, or piece of gauze until bleeding stops.</Text>
<Text>If blood soaks through the material, don’t remove it. Put more cloth or gauze on top of it and continue to apply pressure.</Text>

</View>
<View style={styles.border}>
<Image source={bleeding} width={100} height={100}/>

</View>

</View>

<View style={styles.box1}>
        <View>
        <Text style={styles.text1}>Choking</Text>
<Text>.Apply direct pressure on the cut or wound with a clean cloth, tissue, or piece of gauze until bleeding stops.</Text>
<Text>If blood soaks through the material, don’t remove it. Put more cloth or gauze on top of it and continue to apply pressure.</Text>

</View>

<View style={styles.border}>
<Image source={bleeding} width={100} height={100}/>

</View>
</View>

<View style={styles.box1}>
        <View>
        <Text style={styles.text1}>Heart Attack</Text>
<Text>.Apply direct pressure on the cut or wound with a clean cloth, tissue, or piece of gauze until bleeding stops.</Text>
<Text>If blood soaks through the material, don’t remove it. Put more cloth or gauze on top of it and continue to apply pressure.</Text>

</View>
<View style={styles.border}>
<Image source={bleeding} width={100} height={100}/>

</View>
</View>




</ScrollView>
</View>
    )
}

const styles=StyleSheet.create({
   box1:{
    height:300,
    width:"100%",
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    elevation:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
    textAlign:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10,
    // paddingTop:50,
    // paddingBottom:50,
    display:"flex",
    flexDirection:"column-reverse",
    alignItems:"center"
   },

   text1:{
textAlign:"center",
fontWeight:"bold",
fontSize:30,
color:"#EC0921"

   },



})


export default FirstAidScreen