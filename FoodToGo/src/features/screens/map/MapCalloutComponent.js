import React, { memo } from "react";
import { Platform, View ,Image} from "react-native";
import styled from "styled-components";
import CustomText from "../../components/typography/text.component";
import WebView from "react-native-webview"

const Item= styled(View)`
padding: 10px;
max-width: 200px;
align-items: center;

`
const CustomImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CustomWebViewImage = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const isAndroid= Platform.OS == "android";
function MapCalloutComponent(props){
    const {singleRestaurant} = props;
    const ImageComponent = isAndroid ? CustomWebViewImage: CustomImage  ;
    console.log(singleRestaurant.photos,"singlerestaurantcheck")
    
    return(
      
      <Item>
<ImageComponent  source={{ uri: singleRestaurant.photos[0] }} />
<CustomText  center variant="caption" numberOfLines={3}>
{singleRestaurant.name}
</CustomText>
    </Item>
)
}
export default memo(MapCalloutComponent);