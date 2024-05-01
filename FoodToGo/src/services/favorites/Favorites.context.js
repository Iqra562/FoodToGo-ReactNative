import React, {useState,createContext, useEffect} from "react"
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const favoriteContext= createContext();
export const  FavoriteContextProvider = ({children})=> {
 const [favorites,setFavorites] = useState([]);

//  const storeFavoriteRes = async (value) => {
//     try {
//       const jsonValue = JSON.stringify(value);
//       await AsyncStorage.setItem('@favRestaurant', jsonValue);
//     } catch (e) {
//       // saving error
//     }
//   };
//   const getFavoriteRes = async () => {
//     try {
//         const jsonValue = await AsyncStorage.getItem('@favRestaurant');
//         const jsonParseValue != null ? JSON.parse(jsonValue) : null;
//         setFavorites(jsonValue);
//       } catch (e) {
//         // error reading value
//       }
//   };

//   useEffect(()=>{
//  storeFavoriteRes(favorites)
//   },favorites);
//   useEffect(()=>{
// getFavoriteRes();
//   },[])

 const add= (singleRestaurant)=>{
setFavorites([...favorites,singleRestaurant]);
 }

 const remove = (singleRestaurant)=>{
const newFavorites= favorites.filter((eachRestaurant)=>{
eachRestaurant.placeId  !==singleRestaurant.placeId;
})
setFavorites(newFavorites); 
 };
return(
    <favoriteContext.Provider value={{favorites,
    addFavorites:add,removeFavorites:remove}}>
        {children}
    </favoriteContext.Provider>
)
} 