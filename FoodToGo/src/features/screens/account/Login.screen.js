import React, { useContext, useState } from "react";

import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput, CommonPasswordProps, Title } from "./account.style";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";



function LoginScreen({navigation}){
  
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);
  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");

  const con = () => {
    console.log("jjdhjkh");
  };
  
return(
 <AccountBackground>
    <AccountCover/>

    <Title> Login </Title>
    <AccountContainer> 
    <AuthInput  
          label="E-mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChange={setEmail}
          />
        <AuthInput
          label="Password"  
          {...CommonPasswordProps}
          onChange={setPassword}
        />

{/* <AuthButton icon="lock-open-outline" mode="contained"   onPress={() => onLogin(email, password)}
          loading={isLoading}>Login </AuthButton> */}
<AuthButton icon="lock-open-outline" mode="contained"   onPress={
  ()=>onLogin(email,password)
// ()=>con()
}
          loading={isLoading}>Login </AuthButton>
<AuthButton icon="lock-open-outline" mode="contained" onPress={()=>navigation.goBack()}>Go Back </AuthButton>
    </AccountContainer>
 </AccountBackground>
)
}   
export default LoginScreen;


// user@gmail.com