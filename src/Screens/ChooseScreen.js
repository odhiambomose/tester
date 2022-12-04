import React from "react";

import { View,TouchableOpacity,Text,StyleSheet } from "react-native";


const ChooseScreen=({navigation})=>{
    return(

<View style={{flex:1,justifyContent:"center"}}>
    <TouchableOpacity
    style={styles.button}
    onPress={()=>navigation.navigate("Driver")}

    >
<Text style={{color:"white"}}>Register as a Driver</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate("home")}

    >
<Text style={{color:"white"}}>Register as a User</Text>
    </TouchableOpacity>

</View>
    )
}

export default ChooseScreen


const styles=StyleSheet.create({
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

})