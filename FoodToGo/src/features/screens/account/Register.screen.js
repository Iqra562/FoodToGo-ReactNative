import React from "react";

import { AccountBackground, AccountContainer, AccountCover, AuthButton, Title } from "./account.style";



function RegisterScreen(){
return(
 <AccountBackground>
    <AccountCover/>

    <Title> Food To Go </Title>
    <AccountContainer>
 
<AuthButton icon="email" mode="contained">Register</AuthButton>
<AuthButton icon="lock-open-outline" mode="contained">Login </AuthButton>
    </AccountContainer>
 </AccountBackground>
)
}   
export default  RegisterScreen;