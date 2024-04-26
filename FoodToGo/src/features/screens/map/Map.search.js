import React, { useContext, useState } from "react";
// import styled from "styled-components/nataive"
import {styled} from "styled-components";
import { View } from "react-native";
import {Searchbar} from "react-native-paper";

const SearchContainer = styled(View)`
padding : ${(props)=>props.theme.space[3]};
background-color:${(props)=>props.theme.colors.bg.primary}; 
`
function MapSearch({isFavourite = false}){
    const {searchQuery,setSearchQuery} = useState("");
    const onChangeSearch = (query)=>setSearchQuery(query);
return(

<SearchContainer>
    <Searchbar
    placeholder="Search for a location"
    onChangeText={onChangeSearch}
    value={searchQuery}
    icon={isFavourite?"heart":"heart-outline"}
    onSubmitEditing={()=>{
        search(searchQuery)
    }}
    />
</SearchContainer>
)
}
export default MapSearch;