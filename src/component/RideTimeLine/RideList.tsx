import { color } from "@/src/constants/colors";
import TextNormal from "@/src/styles/TextNormal";
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const rideData = [
  {
    id: "1",
    date: "April 10, 2025",
    time: "2:30 PM",
    fare: "$24.50",
    pickup: {
      location: "Central Park West",
      label: "Pickup Location",
    },
    dropoff: {
      location: "Times Square",
      label: "Drop off Location",
    },
  },
  {
    id: "2",
    date: "April 11, 2025",
    time: "4:00 PM",
    fare: "$30.00",
    pickup: {
      location: "5th Avenue",
      label: "Pickup Location",
   
    },
    dropoff: {
      location: "Brooklyn Bridge",
      label: "Drop off Location",
   
    },
  },
];

const RideList = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <TextNormal style={styles.dateText}>
          {item.date} • {item.time}
        </TextNormal>
        <Text style={styles.fareText}>{item.fare}</Text>
      </View>

      <View style={styles.locationRow}>
        <View style={styles.dotColumn}>
          <View style={[styles.dot, { backgroundColor:color.redColor,borderColor:'rgba(255, 77, 73, 0.2)' }]} />
          <View style={styles.verticalLine} />
        </View>
        <View>
          <TextNormal style={styles.locationText}>{item.pickup.location}</TextNormal>
          <TextNormal style={styles.subText}>{item.pickup.label}</TextNormal>
        </View>
      </View>
      <View style={styles.locationRow}>
        <View style={styles.dotColumn}>
          <View style={[styles.dot, { backgroundColor:color.greenColor,borderColor:'rgba(52, 199, 89, 0.2)' }]} />
        </View>
        <View>
          <TextNormal style={styles.locationText}>{item.dropoff.location}</TextNormal>
          <TextNormal style={styles.subText}>{item.dropoff.label}</TextNormal>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={rideData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ paddingHorizontal: hp(2)}}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: hp(1.5),
    width:'100%',
    padding: hp(1.5),
    marginBottom: hp(1.2),
    borderWidth: 1,
    borderColor: color.border, 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: hp(1.5),
  },
  dateText: {
    fontSize: hp(1.6),
    color: color.textSecondary,
    fontWeight: "500",
  },
  fareText: {
    fontSize: hp(2),
    fontWeight: "600",
    color: color.textPrimary,
  },
  locationRow: {
    flexDirection: "row",
    marginBottom: hp(0.1),
  },
  dotColumn: {
    width: wp(8),
    marginTop: hp(0.6),
    alignItems: "center",
  },
  dot: {
    height: hp(1.8),
    width: hp(1.8),
    borderRadius: hp(1),
    borderWidth: 3,
  },
  verticalLine: {
    width: 1,
    height: hp(3.5),
    backgroundColor: "rgba(76, 78, 100, 0.12)", 
    marginTop: 2,
  },
  locationText: {
    fontSize: hp(1.7),
    fontWeight: "700",
    color: color.textPrimary,
  },
  subText: {
    fontSize: hp(1.4),
    color: color.textSecondary,
  },
});

export default RideList;
