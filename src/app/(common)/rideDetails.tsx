import CommonHeader from "@/src/component/Header/CommonHeader";
import MapComponent from "@/src/component/RideDetails/MapComponent";
import TimeLine from "@/src/component/RideDetails/TimeLine";
import OuterContainer from "@/src/styles/OuterContainer";
import { View } from "react-native";
const RideDetails = () => {
    return (
        <OuterContainer>
           <View style={{flex:0.6}}>
            <CommonHeader title="Ride Details"/>
            <TimeLine/>
           </View>
           <View style={{flex:1}}>
            <MapComponent/>
           </View>
        </OuterContainer>
    );
};

export default RideDetails;
