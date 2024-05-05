import React from "react";

import { AccountBackground, AccountContainer, AccountCover, AuthButton, Title } from "./account.style";
// import LoginScreen from "./Login.screen";


function AccountScreen({navigation}){
return(
 <AccountBackground>
    <AccountCover/>

    <Title> Food To Go </Title>
    <AccountContainer> 
 
<AuthButton icon="lock-open-outline" mode="contained">Register </AuthButton>
<AuthButton icon="email" mode="contained" onPress={()=> navigation.navigate("Login")}>Login</AuthButton>
    </AccountContainer>
 </AccountBackground>
)
}   
export default AccountScreen;