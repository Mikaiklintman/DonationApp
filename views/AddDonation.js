import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, ActivityIndicator, Image, Button, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { filter } from 'lodash';



export default function AddDonation({navigation}) {
 


  return (

    <View style={{padding:10, gap: 10}}>

<TextInput placeholder='Name' clearButtonMode= 'always' style={styles.Searchbox} />
<TextInput placeholder='Date' clearButtonMode= 'always' style={styles.Searchbox} />
<TextInput placeholder='Amount' clearButtonMode= 'always' style={styles.Searchbox} />
<TextInput placeholder='Amount Goal' clearButtonMode= 'always' style={styles.Searchbox} />


<Button title='Add' onPress={() => {
  navigation.navigate('Explore')
}} />



    </View>

  );
}

const styles = StyleSheet.create({
  Searchbox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8
  }
});