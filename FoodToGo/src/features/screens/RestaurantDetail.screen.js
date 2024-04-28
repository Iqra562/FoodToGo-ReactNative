import React, { useState } from "react";
import { View,Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { List } from "react-native-paper";
import CustomRestaurantCard from "../components/RestaurantCard/CustomRestaurantCard";

function RestaurantDetailScreen(props){
  const {singleRestaurant} = props?.route?.params;
  const [breakFastExpanded,setBreakFastExpanded] = useState(false);
  const [Lunch,setLunch] = useState(false);
  const [Dinner,setDinner] = useState(false);
  const [Drinks,setDrinks] = useState(false); 
    return(
        <SafeAreaView>
            <ScrollView>
            <CustomRestaurantCard  restaurant={singleRestaurant?.item}/>
                <List.Accordion
                title="Breakfast"
                left={(props)=> <List.Icon {...props} icon="bread-slice"/>
            }
            expanded={breakFastExpanded}
            onPress={()=> setBreakFastExpanded(!breakFastExpanded)}
                >
                    <List.Item title="Eggs benediate"/>
                    <List.Item title="CLassic Breakfat"/>

                </List.Accordion>
                <List.Accordion
                title="Lunch"
                left={(props)=> <List.Icon {...props} icon="hamburger"/>
            }
            expanded={Lunch}
            onPress={()=> setLunch(!breakFastExpanded)}
                >
                    <List.Item title="Burger with fries"/>
                    <List.Item title="Mushroom soup"/>

                </List.Accordion>
          
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={Dinner}
          onPress={() => setDinner(!Dinner)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={Drinks}
          onPress={() => setDrinks(!Drinks)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Fanta" />
        </List.Accordion>

              
            </ScrollView>
        </SafeAreaView>
    )
}
export default RestaurantDetailScreen;