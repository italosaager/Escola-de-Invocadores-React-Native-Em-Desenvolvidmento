import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Classes() {

 return (
  <View style={styles.container}>
   <ScrollView>
   
    <View style={styles.container2}>
    <Image style={styles.mainImage} source={require('../../assets/images/campeoeslol.png')}/>
    </View>

    <View style={styles.container3}>
      <Text style={styles.text}></Text>
    </View>

   </ScrollView>
  </View>

  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#000',
    opacity: 0.9,
    flex: 1,
  },
  text:{
    color: '#fff',
    fontSize: 16,
  },
  mainImage:{
    width: 420,
    height: 200,
  },
  container2:{
    justifyContent: 'center', 
    alignItems: 'center',
  },
  container3:{
    margin: 20,
  }
})