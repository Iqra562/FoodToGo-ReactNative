import React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { styled } from "styled-components/native";
import CustomText from "../typography/text.component";
import CustomRestaurantCard from "../RestaurantCard/CustomRestaurantCard";


const FavoriteView = styled(View)`
padding:10px;
`
function FavoriteBar({favoriteRestaurants}){
return(

<FavoriteView>
<ScrollView horizontal showsVerticalScrollIndicator={false}>

    {
        favoriteRestaurants?.length >0 &&
favoriteRestaurants.map(
    (singleRestaurant)=>{
        const uniqueKey = singleRestaurant?.name.split(" ").join("");
        return(
                <View  style={{marginRight:15}} key={uniqueKey}>

            <CustomRestaurantCard restaurant={singleRestaurant}  usingFavoriteBar={true}/>
                </View>
        )

    }
)
    }
{/* <CustomText variant="caption">fav</CustomText> */}
</ScrollView>
</FavoriteView>
)
}
export default FavoriteBar;