import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import { useState } from 'react';



export default function Explore({ navigation }) {




  const [images, setImages] = useState([


    {title: 'Children in need', img: require('../assets/Bild1(Barn).jpeg')},
    {title: 'Palestine & Israel conflict', img: require('../assets/Bild2(Palestine).jpeg')},
    {title: 'Sports', img: require('../assets/Bild3(Sport).jpeg')},
    {title: 'Non-profit organisations', img: require('../assets/Bild4(Non-profit).jpeg')},
    {title: 'Community', img: require('../assets/Bild5(kultur).jpeg')}

  ]);

  return (
 
    <SafeAreaView style={styles.container}>
      <View style={{ display: 'flex', marginLeft: 330 }}>
        <TouchableOpacity onPress={() => navigation.navigate('AddDonation')}>
          <Text style={{ fontSize: 30 }}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{ shadowColor: 'grey' }}>
        <Text style={{ borderColor: '#ccc', borderWidth: 0.5, height: 1, marginTop: 5 }}></Text>
        <Text style={{ padding: 20, fontSize: 15 }}>Välj dina favoritorganisationer och donera enkelt för att göra skillnad!</Text>
      </View>

      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        data={images}

        renderItem={({ item, index }) => (
          <TouchableOpacity style={{gap: 1}} onPress={() => {
            navigation.navigate('sok')
          }}>
            <Text style={{ fontSize: 18, fontWeight: 600, marginTop: 40 }}>{item.title}</Text>
            <Image source={item.img} key={index}
              style={styles.Imagestyle}>
            </Image>
          </TouchableOpacity>
        )}
      >
      </FlatList>
      <StatusBar style="auto" />


    </SafeAreaView>


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
    height: 180,
    resizeMode: 'contain',
  }
});
