import React from "react";
import { View, StyleSheet,Image, Text } from "react-native";
import TextNormal from "@/src/styles/TextNormal";
import TextBold from "@/src/styles/TextBold";
import OuterContainer from "@/src/styles/OuterContainer";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DashboardHeader from "@/src/component/dashboard/DashboardHeader";
import AssignedRideBox from "@/src/component/dashboard/AssignedRideBox";
import CarDetailsCard from "@/src/component/dashboard/CarDetailsCard";
import { heightPercentageToDP as hp} from "react-native-responsive-screen";
import CustomerDetailsCard from "@/src/component/dashboard/CustomerDetailsCard";
import { spacing } from "@/src/styles/Spacing";

const Dashboard: React.FC = () => {
  console.log('Dashboard component rendered');
  return (
    <OuterContainer>
      <View style={{ flex: 2.5}}>
        <DashboardHeader/>
        <AssignedRideBox/>
        </View>
      <View style={{ flex: 2, marginTop:spacing.lg}}>
        <CarDetailsCard/>
        <CustomerDetailsCard/>
      </View>
      <View> 
   </View>
    </OuterContainer>
  );
};

const styles = StyleSheet.create({

})

export default Dashboard;