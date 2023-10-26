import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Searchfilter from '../Components/Searchfilter'
import { useState } from 'react';

export default function Search() {

const words = [
  {
    name: 'Children in need',
    id: '1',
  },
  {
    name: 'Palestine & Israel conflict',
    id: '2',
  },
  {
    name: 'Sports',
    id: '3',
  },
  {
    name: 'Non-profit organisations',
    id: '4',
  },
  {
    name: 'Community',
    id: '5',
  },
 ]

 const [input, setInput] = useState('');


  return (

    <SafeAreaView style={{flex:1, marginHorizontal:20 }}>

    <TextInput value={input} onChangeText={(Text) => setInput(Text)} placeholder='Search' clearButtonMode= 'always' style={styles.Searchbox} />



<Searchfilter data={words} input={input} setInput={setInput}/>
    </SafeAreaView>

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