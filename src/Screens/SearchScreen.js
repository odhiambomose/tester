

import React, { useState, useEffect, useContext } from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,

} from 'react-native';
import Bottom from './Bottom';
import { Context } from '../context/AmbulanceContext';
const SearchScreen = ({ search, setSearch }) => {
const {visible}=useContext(Context);
const [isVisible, setVisible]=visible

  const handleSelection = (p) => {
    setSearch(prev => ({
      ...prev,
      searchItem: p.item.place_name,
      isShowingResults: false
    }))


    setSearch(prev => ({ ...prev, coords: p.item.geometry.coordinates }))

    setVisible(true)



  }

  // useEffect(()=>{
  //   if
  // })


  const searchLocation = async (text) => {
    setSearch(prev => ({ ...prev, searchKeyword: text }));

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=sk.eyJ1Ijoic2VzbW8iLCJhIjoiY2xhdXA3YmtwMDhycjN5bnkyZm1iYmJ2NiJ9.vwwhLPsxEJtMh-daTqua6A`)
      .then((response) => response.json())
      .then(data => setSearch(prev => ({ ...prev, searchResults: data, isShowingResults: true })))


  };







  // console.log(search.searchResults.features)
  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.autocompleteContainer}>


        <TextInput
          style={styles.searchBox}
          placeholder="From"
          placeholderTextColor="#000"
defaultValue='Nairobi,Mashimoni,Magoso'
        />
        <TextInput
          placeholder="To"
          returnKeyType="search"
          style={styles.searchBox}
          placeholderTextColor="#000"
          onChangeText={(text) => searchLocation(text)}
          defaultValue={search.searchItem}
        />


        {search.isShowingResults && (
          <FlatList
            data={search.searchResults.features}
            renderItem={(item) => {
              return (
                <TouchableOpacity
                  style={styles.resultItem}
                  onPress={() =>{
                    handleSelection(item)
                    console.log("yeeey")
                    // setVisible(true)
                  } }>
                  {console.log(search.searchKeyword)}
                  <Text>{item.item.place_name}</Text>


                </TouchableOpacity>
                // <TouchableOpacity
                //   style={styles.resultItem}
                //   onPress={() => handleSelection(item)}>
                //   {console.log(search.searchKeyword)}
                //   <Text>{item.item.place_name}</Text>


                // </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
            style={styles.searchResultsContainer}
          />
        )}



      </View>
      <View style={styles.dummmy} >

        <Text>mmmmm</Text>
      </View>

      <View>
        {/* <Bottom/> */}
      </View>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  autocompleteContainer: {
    zIndex: 1,
  },
  searchResultsContainer: {
    width: 340,
    height: 200,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 120,
  },
  // dummmy: {
  //   width: 600,
  //   height: 200,
  //   marginTop: 20,
  // },
  resultItem: {
    width: '100%',
    justifyContent: 'center',
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 15,
  },
  searchBox: {
    width: 340,
    height: 50,
    fontSize: 18,
    borderRadius: 8,
    borderColor: '#aaa',
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    paddingLeft: 15,
    marginTop: 7,

  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

});

export default SearchScreen