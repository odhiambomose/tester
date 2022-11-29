import React from 'react';
import { View,Image,StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
const TestScreen=({navigation})=>{

    return(
<Onboarding
onSkip={()=>navigation.navigate("home")}
onDone={()=>navigation.navigate("home")}


  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../assets/care1.png')} style={styles.caro} />,
      title: 'Service',
      subtitle: 'We offer 24/7 service to our users in Kenya',
    },

    {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/location.png')} style={styles.caro} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../../assets/service.png')} style={styles.caro} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

  ]}
/>
)

}


const styles=StyleSheet.create({
caro:{
    width: 270,
    height: 240,
}
})


export default TestScreen