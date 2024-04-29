import React, { useContext, useState }  from "react";

import UserSearch from '../components/UserSearch.components'
import CustomRestaurantCard from "../components/RestaurantCard/CustomRestaurantCard";
import { ScrollView, View,FlatList,ActivityIndicator,Text } from "react-native";
import {styled} from "styled-components";
import { RestaurantsContext } from "../../services/restaurants/restaurant.context";
import { LocationContext } from "../../services/locations/location.context";
import { TouchableOpacity } from "react-native-gesture-handler";
import FavoriteBar from "../components/FavoriteBar/FavoriteBar";
import { favoriteContext } from "../../services/favorites/Favorites.context";

const RestaurantListContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  
`;

const RestaurantList  = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})``;


const Loading = styled(ActivityIndicator)``;

function RestaurantScreen (props){
  const totalRestaurant = Array.from({length:5})
   const {isLoading,restaurants} = useContext(RestaurantsContext);
   const {isLoading: LocationLoader,location,error} = useContext(LocationContext);
   const [toggle,setToggle] = useState(false);
   const Loaders = isLoading || LocationLoader;
   const {navigation} = props;
   const {favorites} = useContext(favoriteContext);

  //  restaurants.forEach(single => console.log(single?.address ,"correct"));
  //  console.log(location,"ressdfhdfdjkhfkjdhkj")
  // console.log(error)
  return<>
    <UserSearch  onFavoriteToggle={()=>setToggle(!toggle)}
    isFavoriteToggle={toggle}
    />
   {toggle && <FavoriteBar favoriteRestaurants={favorites}/>}
 {Loaders && (<Loading/>)}

    
   {!Loaders   && 
   (
   <RestaurantListContainer>
    {/* <ScrollView>
    {
      totalRestaurant.map((singleArray)=>{
      return  <CustomRestaurantCard restaurant={{}}/>
      })
    }
  </ScrollView> */}

  <RestaurantList
  data={restaurants}
  renderItem={ 
    (singleRestaurant)=>{
      // console.log(singleRestaurant.item,"items"),
      return(

        <TouchableOpacity
        onPress={()=>{
          navigation.navigate(
            "RestaurantDetail",{
              singleRestaurant:singleRestaurant
            }
          )
        }}
        >

        <CustomRestaurantCard  restaurant={singleRestaurant?.item}/>
        </TouchableOpacity>
      )
    }
  }
  keyExtractor={(singleRestaurant) => singleRestaurant?.item?.name}

  />
  </RestaurantListContainer>
  
)}
</>
}
export default RestaurantScreen;