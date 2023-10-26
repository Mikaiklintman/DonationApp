import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from './views/Explore'
import Search from './views/Search'
import MyProfile from './views/MyProfile';
import AddDonation from './views/AddDonation';
 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {

  return(
    <Tab.Navigator>
      <Tab.Screen name='Explore' component={ExploreStack} options={{headerShown: false}}/>
      <Tab.Screen name='Search' component={Search} />
      <Tab.Screen name='Profile' component={MyProfile} />





    </Tab.Navigator>
  );
}

function ExploreStack() {

  return(
    <Stack.Navigator>


<Stack.Screen name='Explore' component={Explore} />
<Stack.Screen name='AddDonation' component={AddDonation} />



</Stack.Navigator>
  );
}

export default function App() {
  return (


 <NavigationContainer>

      <MyTabs/>




    </NavigationContainer>










  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
