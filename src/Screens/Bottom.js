// import { TouchableOpacity } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { Text, Pressable, View, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import BottomSheet from "react-native-easy-bottomsheet";
import { FlatList } from "react-native-gesture-handler";
import { carTypeData } from "./data";
import { useNavigation } from "@react-navigation/native";

const Bottom = () => {
  const [isVisible, setVisible] = useState(false);
  const navigation = useNavigation()
  return (
    <View style={styles.centeredView}>

      <View>


        <View>


          {/* <Image
                        style={styles.stretch}
                        source={carTypeData.data.image}
                    /> */}
          <FlatList
            data={carTypeData}
            renderItem={item => {

              return (

                <View>
                  <Text style={{ fontWeight: "bold", fontSize: 30, color: "red" }}>{item.item.title}</Text>

                  <FlatList
                    data={item.item.data}
                    renderItem={item2 => {
                      return (
                        <TouchableOpacity
                          onPress={() => navigation.navigate("Booking")}                >
                          <View style={{ display: "flex", flexDirection: "row", paddingTop: 30, paddingBottom: 30, justifyContent: "space-between", alignItems: "center" }}>
                            <Image source={item2.item.image} style={styles.img1} />
                            <View style={{ display: "flex", flexDirection: "column" }}>
                              <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item2.item.name}</Text>
                              <Text>{item2.item.time}</Text>
                              <Text>{item2.item.note}</Text>
                            </View>

                            <View>
                              <Text style={{ color: "green", fontWeight: "bold", fontSize: 20 }}>Ksh {item2.item.promotion}</Text>
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
  img1: {
    width: "20%",
    height: "100%"

  }
});

export default Bottom;