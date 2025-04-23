import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import TextNormal from "@/src/styles/TextNormal";
import TextBold from "@/src/styles/TextBold";
import { color } from "@/src/constants/colors";

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <TextBold style={styles.heading}>Profile</TextBold>

      <View style={styles.card}>
        {/* Header Section */}
        <View style={styles.header}>
          <Image
                  source={require('../../assets/images/user.png')}
                 style={styles.avatar}
                 resizeMode="contain"
               />
          <View style={{ flex: 1 }}>
            <TextNormal style={styles.name}>Dev Lavate</TextNormal>
            <TextNormal style={styles.email}>devlavate@gmail.com</TextNormal>
          </View>
          <View style={styles.statusWrapper}>
            <TextNormal style={styles.statusText}>Active</TextNormal>
            <View style={styles.statusDot} />
          </View>
        </View>

        {/* Info Rows */}
        <View style={styles.row}>
          <MaterialIcons name="phone" size={16} color="#555" />
          <TextNormal style={styles.rowText}>+91 7654321987</TextNormal>
        </View>
        <View style={styles.row}>
          <FontAwesome name="id-card" size={14} color="#555" />
          <TextNormal style={styles.rowText}>Driver ID : 0141</TextNormal>
        </View>
        <View style={styles.row}>
          <MaterialIcons name="directions-car" size={16.5} color="#555" />
          <TextNormal style={styles.rowText}>Maruti Suzuki Swift Dzire, White</TextNormal>
        </View>
        <View style={styles.row}>
          <MaterialIcons name="confirmation-number" size={16} color="#555" />
          <TextNormal style={styles.rowText}>License Plate : MP09 AB 1234</TextNormal>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  heading: {
    fontSize: hp(2.4),
    fontWeight:"700",
    marginVertical: hp(1.2),
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    backgroundColor: color.primary,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15.3,
  },
  email: {
    color: "#e1e1e1",
    fontSize: 12,
  },
  statusWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: color.greenColor,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    gap: 8,
  },
  rowText: {
    color: "#333",
    fontSize: 13.5,
  },
});

export default ProfileCard;
