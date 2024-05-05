import { createStackNavigator } from "@react-navigation/stack";
import {Text,View} from "react-native";
import AccountScreen from "../features/screens/account/Account.screen";
import LoginScreen from "../features/screens/account/Login.screen";
import RegisterScreen from "../features/screens/account/Register.screen";

const  Stack = createStackNavigator();
export const LoginNavigator=()=>{
    return(

    
    <Stack.Navigator headerMode="none">
<Stack.Screen  name="Main"
component={AccountScreen} 
/>
<Stack.Screen  name="Login"
component={LoginScreen}
/>
<Stack.Screen  name="Register"
component={RegisterScreen}
/>

    </Stack.Navigator>
    )
}