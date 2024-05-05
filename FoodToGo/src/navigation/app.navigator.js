import React, { useEffect, useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
// import { RestaurantNavigator } from './src/navigation/restaurants.navigator';
import { RestaurantNavigator } from './restaurants.navigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MapScreen from './src/features/screens/map/Map.screen';
import MapScreen from '../features/screens/map/Map.screen';
import { View,Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = (parameter) => {
  const { route } = parameter;
  const iconName = TAB_ICONS[route.name];

  return {
    tabBarIcon: (tabBarParam) => {
      const { size, color } = tabBarParam;
      return <Ionicons name={iconName} size={size} color={color} />;
    },

    headerShown: false,
  };
};
function SettingsScreen(){
    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>Setting</Text>
      </View>
    )
  }

export default AppNavigator=()=>{
    return(
        <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      > 
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    )
}