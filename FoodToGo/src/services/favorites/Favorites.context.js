import React, {useState,createContext} from "react"


export const favoriteContext= createContext();
export const  FavoriteContextProvider = ({children})=> {
 const [favorites,setFavorites] = useState([]);
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