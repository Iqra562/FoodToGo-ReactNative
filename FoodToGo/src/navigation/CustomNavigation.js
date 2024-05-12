import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./FoodApp.navigator";
import {AuthenticationContext}  from "../services/authentication/authentication.context"
import { LoginNavigator } from "./login.navigator";
function CustomNavigation(){
    const {isAuthenticated } = useContext(AuthenticationContext);
// console.log(isAuthenticated,"authenticated")
    return(
<NavigationContainer>
    {isAuthenticated ? <AppNavigator/> : <LoginNavigator/>}
    {/* <AppNavigator/> */}
</NavigationContainer>
    )  
}
export default CustomNavigation;    