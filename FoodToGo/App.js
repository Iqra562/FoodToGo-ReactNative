import React, { useEffect, useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import  styled  from 'styled-components/native';
 import { useFonts as useLato , Lato_400Regular } from '@expo-google-fonts/lato';
 import { useFonts as useOswald ,Oswald_400Regular } from '@expo-google-fonts/oswald';
 import RestaurantScreen from './src/features/screens/Restaurant.screen'
 import theme from './src/infrastructure/theme/index';
import { RestaurantProvider } from './src/services/restaurants/restaurant.context';
import  LocationContextProvider  from './src/services/locations/location.context'; 
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from './src/navigation/restaurants.navigator';
import MapScreen from './src/features/screens/map/Map.screen';
import { FavoriteContextProvider } from './src/services/favorites/Favorites.context';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthenticationProvider } from './src/services/authentication/authentication.context';
import AppNavigator from './src/navigation/FoodApp.navigator';
import CustomNavigation from './src/navigation/CustomNavigation';
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// import  * as firebase from "firebase";
// const Tab = createBottomTabNavigator();

// const TAB_ICONS = {
//   Restaurants: "md-restaurant",
//   Map: "md-map",
//   Settings: "md-settings",
// };

// const createScreenOptions = (parameter) => {
//   const { route } = parameter;
//   const iconName = TAB_ICONS[route.name];

//   return {
//     tabBarIcon: (tabBarParam) => {
//       const { size, color } = tabBarParam;
//       return <Ionicons name={iconName} size={size} color={color} />;
//     },

//     headerShown: false,
//   };
// };
 

const firebaseConfig = {
  apiKey: "AIzaSyCDgVDRIapv3xQPI8wpoUQeYpb-giE8GdI",
  authDomain: "foodtogo-4daff.firebaseapp.com",
  projectId: "foodtogo-4daff",
  storageBucket: "foodtogo-4daff.appspot.com",
  messagingSenderId: "358560105794",
  appId: "1:358560105794:web:faa46fe0031efeee2cf4db",
  measurementId: "G-K2WCGNT80K"
};


  initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export default function App() {
  const [isAuthenticated,setIsAuthenticated]= useState(false);
  // let  [oswaldFont] = useOswald({
  //   Oswald_400Regular
  // });
  // let [latoFont] = useLato({
  //   Lato_400Regular
  // })

  
  const Title = styled(Text)`
    font-size: 100px;
    fontFamily: Oswald_400Regular;
     color: ${(props) => props.theme.colors.bg.primary}; 
    `;

const CustomSafeAreaView= styled(SafeAreaView)`

flex:1;
margin-top: ${StatusBar.currentHeight}px;
`



// if(!isAuthenticated){
// return null;

// }
  
  return (   
    
    <ThemeProvider theme={theme}>
      <AuthenticationProvider>

      <FavoriteContextProvider>

      <LocationContextProvider>
  <RestaurantProvider>
     <CustomSafeAreaView>
        {/* <View> */}
      {/* <NavigationContainer> */} 
      {/* <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    > 
      <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator> */}
    {/* {AllRestaurantPart} */}
    <CustomNavigation/>
      {/* </NavigationContainer> */}
      {/* </View> */}
     </CustomSafeAreaView>
  </RestaurantProvider>
</LocationContextProvider>
</FavoriteContextProvider>
</AuthenticationProvider>


     </ThemeProvider>
  );
}
