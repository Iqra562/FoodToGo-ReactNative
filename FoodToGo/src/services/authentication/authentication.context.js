import { createContext,useState } from "react";
import { LoginRequest } from "./authentication.service";

 export const AuthenticationContext= createContext();


export const AuthenticationProvider = ({children})=>{
const [user,setUser] = useState(null);
const [isAuthenticated,setIsAuthenticated]= useState(false);
const [isLoading,setIsLoading]= useState(false);
const [error,setError] = useState(null);

const onLogin= async(email,password)=>{
// await console.log(email,password,"djklshj");
setIsLoading(true);
setIsAuthenticated(true)
  await LoginRequest(email,password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user,"user")
        if(user){
         setIsAuthenticated(true);
         setUser(user);
        }

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage.toString());
        console.log(error,"error")
        
      });
      setIsLoading(false)
}


    return (  
        
        <AuthenticationContext.Provider value={{
        user,
        isAuthenticated,
        isLoading,
        error,
        onLogin,
    }}>
        {children}
    </AuthenticationContext.Provider>
    
)


}
