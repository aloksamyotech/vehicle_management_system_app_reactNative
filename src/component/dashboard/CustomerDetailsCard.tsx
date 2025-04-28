import { color } from "@/src/constants/colors";
import { spacing } from "@/src/styles/Spacing";
import TextNormal from "@/src/styles/TextNormal";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const CustomerDetailsCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Customer Details</Text>

      <View style={styles.row}>
        <TextNormal style={styles.label}>Name</TextNormal>
        <TextNormal style={styles.value}>Rahul Verma</TextNormal>
      </View>

      <View style={styles.row}>
        <TextNormal style={styles.label}>Contact Info.</TextNormal>
        <TextNormal style={styles.value}>+91 7828058757</TextNormal>
      </View>

      <View style={styles.row}>
        <TextNormal style={styles.label}>Payment Mode</TextNormal>
        <TextNormal style={styles.value}>upi</TextNormal>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: spacing.sm,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.xxl,
    borderWidth: 1,
    borderColor: color.border,
    gap: spacing.xs,
  },
  title: {
    fontSize: hp(1.9),
    fontWeight: "700",
    color: color.textPrimary,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: hp(1.6),
    color: color.labelColor,
  },
  value: {
    fontSize: hp(1.6),
    color: color.textPrimary,
    fontWeight: "600",
  },
});

export default CustomerDetailsCard;
