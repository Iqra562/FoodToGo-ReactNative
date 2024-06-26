import RestaurantScreen from "../features/screens/Restaurant.screen";
import RestaurantDetailScreen from "../features/screens/RestaurantDetail.screen";
import { TransitionPresets,createStackNavigator } from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();
export const RestaurantNavigator = ()=>{
    return(
<RestaurantStack.Navigator
headerMode="none"
screenOptions={{
    ...TransitionPresets.ModalPresentationIOS,
}}
>
    <RestaurantStack.Screen 
    name="RestaurantListing"
    component={RestaurantScreen}
    />
    <RestaurantStack.Screen 
    name="RestaurantDetail"
    component={RestaurantDetailScreen}
    />
</RestaurantStack.Navigator>

    )
}