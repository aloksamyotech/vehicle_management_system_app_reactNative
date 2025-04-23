
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import TextNormal from "@/src/styles/TextNormal";
import TextBold from "@/src/styles/TextBold";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { spacing } from "@/src/styles/Spacing";
import { useRouter } from "expo-router";
import { color } from "@/src/constants/colors";


const AssignedRideBox: React.FC = () => {
      const router = useRouter();
    const handleJourney =()=>{
        router.navigate("/rideDetails");
    }
 
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TextNormal style={styles.headText}>Assigned Ride</TextNormal>
          <TextNormal style={styles.subHeadText}>{`(Today 4-Apr-2025)`}</TextNormal>
        </View>
        <View style={styles.activeContainer} />
      </View>

      {/* Ride Status */}
      <View style={styles.statusRow}>
        <TextNormal style={styles.statusLabel}>Ride Status</TextNormal>
        <TouchableOpacity style={styles.statusButton} >
          <TextNormal style={styles.statusText}>Pending</TextNormal>
        </TouchableOpacity>
      </View>

      {/* Ride Info Box */}
      <View style={styles.rideInfoBox}>
        <View style={styles.locationRow}>
          <FontAwesome style={{marginTop:hp(0.6)}} name="circle" size={12} color={color.greenColor} />
          <TextNormal style={styles.locationLabel}>Pickup</TextNormal>
          <TextNormal style={styles.timeText}>(Time 4 PM)</TextNormal>
        </View>
        <TextBold style={styles.locationAddress}>123 Market Street, San Francisco</TextBold>

        <View style={styles.locationRow2}>
          <FontAwesome style={{marginTop:hp(0.6)}} name="circle" size={12} color="#2D68FE" />
          <TextNormal style={styles.locationLabel}>Drop-off</TextNormal>
          <TextNormal style={styles.timeText}>(Estimated Time 4 PM)</TextNormal>
        </View>
        <TextBold style={styles.locationAddress}>456 Mission Street, San Francisco</TextBold>
      </View>

      {/* Fare and Button */}
      <View style={styles.footer}>
        <View style={styles.fareRow}>
          <TextNormal style={styles.fareLabel}>Fare</TextNormal>
          <TextNormal style={styles.fareValue}>$35</TextNormal>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleJourney} >
          <TextNormal style={styles.buttonText}>Start Journey</TextNormal>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor:color.primary,
    borderRadius: spacing.xl,
    padding: spacing.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  headText: {
    color: "white",
    fontSize: hp(1.9),
  },
  subHeadText: {
    color: "white",
    fontSize: hp(1.4),
    marginLeft: spacing.xs,
    marginBottom: spacing.xs,
  },
  activeContainer: {
    height: hp(1.4),
    width: hp(1.4),
    borderRadius: spacing.sm,
    borderColor: "white",
    borderWidth: 0.9,
    backgroundColor: color.greenColor,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.md,
  },
  statusLabel: {
    color: "white",
    fontSize: hp(1.8),
  },
  statusButton: {
    backgroundColor:color.pending,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.lg,
    height: hp(3.7),
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    color: "white",
    fontSize: hp(1.7),
  },
  rideInfoBox: {
    backgroundColor: "white",
    borderRadius: spacing.md,
    padding: spacing.lg,
    marginTop: spacing.md,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationRow2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.md,
  },
  locationLabel: {
    marginLeft: spacing.sm,
    fontSize: hp(1.6),
  },
  timeText: {
    marginLeft: spacing.sm,
    fontSize: spacing.md,
    color: "#6B7280",
  },
  locationAddress: {
    marginLeft: hp(2.1),
    marginTop: spacing.xs,
    fontWeight: "600",
    fontSize: hp(1.6),
  },
  footer: {
    marginTop: spacing.md,
    alignItems: "center",

  },
  fareRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  fareLabel: {
    color: "white",
    fontSize: hp(1.8),
  },
  fareValue: {
    color: "white",
    fontSize: spacing.xl,
  },
  button: {
    backgroundColor:color.greenColor,
    borderRadius: spacing.xxl,
    paddingHorizontal: spacing.xxl,
    height: hp(4.8),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: spacing.lg,
  },
});

export default AssignedRideBox;
