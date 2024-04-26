import React from "react"
import {View,Text, SafeAreaView} from "react-native"
import MapView from "react-native-maps"
import MapSearch from "./Map.search"
import {styled} from "styled-components";
import { LocationContext } from "../../../services/locations/location.context";


const CustomMapView= styled(MapView)`
width:100%;
height:100%;
`

function MapScreen(){
    const {location} = useContext(LocationContext)
    return(
    <SafeAreaView>
        <MapSearch region={{
latitude:location?.lat,
longitude:location?.lng,

        }}
        />
        <CustomMapView  />
    </SafeAreaView>
    )
}
export default MapScreen;




