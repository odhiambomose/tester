

import React, {useState} from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  
} from 'react-native';
const SearchScreen =()=> {

  const [search, setSearch] = useState({
    searchKeyword:"",
    isShowingResults:false
  })

  
  const searchLocation = async (text) => {
    setSearch(prev=>({...prev, searchKeyword: text}));
 
    fetch( `https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=sk.eyJ1Ijoic2VzbW8iLCJhIjoiY2xhdXA3YmtwMDhycjN5bnkyZm1iYmJ2NiJ9.vwwhLPsxEJtMh-daTqua6A`)
      .then((response) => response.json())
      .then(data=>setSearch(prev=>({...prev, searchResults: data, isShowingResults:true})))
      

            };
    
    
  


  
    return (

      <SafeAreaView style={styles.container}>
        
        <View style={styles.autocompleteContainer}>


          <TextInput
                      style={styles.searchBox}
                      placeholder="From"
                      placeholderTextColor="#000"

          />
          <TextInput
            placeholder="To"
            returnKeyType="search"
            style={styles.searchBox}
            placeholderTextColor="#000"
            onChangeText={(text) => searchLocation(text)}
            value={search.searchKeyword}

          />


{search.isShowingResults && (
            <FlatList
              data={search.searchResults.features}
              renderItem={(item) => {
                return (
                  <TouchableOpacity
                    style={styles.resultItem}
                    onPress={() =>
                      setSearch(prev=>({
                        ...prev,
                        searchKeyword:item.place_name,
                        isShowingResults:false
                      }))
                      
                    }>
                      <Text>{item.item.place_name}</Text>

                      {console.log(item)}
               
                  </TouchableOpacity>
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
    top: 50,
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
    marginTop:7,
    
  },
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },

});

export default SearchScreen