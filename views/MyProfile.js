import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

export default function MyProfile() {
  return (

 
    <View style={styles.container}>

      <Image source={require('../assets/Bild6(QR).jpeg')}
              style={styles.Imagestyle}>
            </Image>

    





      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    fontSize: 20,
  },
  Imagestyle: {
    width: 260,
    height: 300,
    resizeMode: 'contain',
    margin: 8,
  }
});