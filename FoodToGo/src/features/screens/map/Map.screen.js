import React,{useContext, useEffect, useState}  from "react"
import {View,Text, SafeAreaView,ActivityIndicator} from "react-native"
import MapSearch from "./Map.search"
import {styled} from "styled-components";
import { LocationContext } from "../../../services/locations/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import MapView, { Marker, Callout } from "react-native-maps";
import MapCalloutComponent from "./MapCalloutComponent";

const CustomMapView= styled(MapView)`
width:100%;
height:100%;
`

const Loading = styled(ActivityIndicator)``;
function MapScreen({navigation}){
    const {location,isLoading:locationLoader} = useContext(LocationContext);
    const {isLoading : restaurantLoader, restaurants = []} = useContext(RestaurantsContext);
    const {lat,lng,viewport} = location;
    const [latDelta,setLatDelta] = useState(0);
    useEffect(()=>{
            const northeastLat= viewport.northeast.lat;
            const southwestLat = viewport.southwest.lat;
            setLatDelta(northeastLat-southwestLat);

        },[viewport,location]
    )
    const Loaders = restaurantLoader || locationLoader;
    return(
        
        <SafeAreaView>

        <MapSearch 
        />
        {Loaders && (<Loading/>)}
        <CustomMapView     initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}>

{
    restaurants.map((singleRestaurant)=>{
return(
    <Marker
    key={singleRestaurant.name}
    title={singleRestaurant.name}
    coordinate={{
      latitude: singleRestaurant.geometry.location.lat,
      longitude: singleRestaurant.geometry.location.lng,
    }}
  >


    <Callout
    
    onPress={() => {
      navigation.navigate("RestaurantDetail", {
        singleRestaurant: singleRestaurant,
      });
    }}>
      <MapCalloutComponent singleRestaurant={singleRestaurant} />

    </Callout>
  </Marker>
)
    })
}


        </CustomMapView>
    </SafeAreaView>
    )
}
export default MapScreen;




