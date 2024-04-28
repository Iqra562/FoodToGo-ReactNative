import React, { useContext } from "react";
import {AntDesign} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { favoriteContext } from "../../../services/favorites/Favorites.context";


const TouchableFavoriteButton = styled(TouchableOpacity)`
position: absolute;
top: 15px;
right: 20px;
z-index: 9;
`
function FavoriteButton({restaurants}){
  const {favorites,addFavorites,removeFavorites} = useContext(favoriteContext);
  const isFavorite = favorites.find((favoriteItem)=>favoriteItem.placeId === restaurants.placeId)

return(
    <TouchableFavoriteButton 
    onPress={()=>{
        !isFavorite ? addFavorites(restaurants):removeFavorites(restaurants)
    }}
    >
<AntDesign name={isFavorite ? "heart" :"hearto"} color={isFavorite ? "red" :"white"} size ={25}/>
    </TouchableFavoriteButton>
)
}
export default FavoriteButton;