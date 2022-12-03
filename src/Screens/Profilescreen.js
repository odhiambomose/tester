import React from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { getAuth } from 'firebase/auth';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const auth = getAuth();
const Profilescreen = () => {


  const user = auth.currentUser;
  if (user !== null) {
    console.log(user)
    // The user object has basic properties such as display name, email, etc.
    // const displayName = user.displayName;
    // const email = user.email;
    // const emailVerified = user.emailVerified;
  
    
    // const uid = user.uid;

    // console.log(email)
  }
  else{
    console.log("No user found")
  }


  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Moses</Title>
            <Caption style={styles.caption}>@m_dhis</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#EC0921" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Nairobi, Kenya</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#EC0921" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+254-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#EC0921" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>modhiambo056@gmail.com</Text>
        </View>
      </View>

      

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#EC0921" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#EC0921" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#EC0921" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#EC0921" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        {/* <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple> */}
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default Profilescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

