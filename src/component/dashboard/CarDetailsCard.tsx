import { color } from "@/src/constants/colors";
import { spacing } from "@/src/styles/Spacing";
import TextNormal from "@/src/styles/TextNormal";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const CarDetailsCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
         source={require('../../assets/images/carImg.png')}
        style={styles.carImage}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <TextNormal style={styles.title}>Car Details</TextNormal>
        <TextNormal style={styles.subtitle}>Toyota Camry, Mate Black</TextNormal>
        <TextNormal style={styles.plate}>TN 01 AN 2435</TextNormal>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: spacing.sm,
    padding: spacing.sm,
    borderWidth: 1,
    borderColor: color.border,
    alignItems: "center",
    gap: spacing.lg, 
  },
  carImage: {
    aspectRatio: 1.5,
    flexShrink: 0,
    height: '100%',
    maxHeight: hp(10),
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: hp(1.9),
    fontWeight: "700",
    color: color.textPrimary,
    marginBottom: hp(0.3),
  },
  subtitle: {
    fontSize: hp(1.7),
    color: color.labelColor,
    marginBottom: hp(0.2),
    flexWrap: 'wrap',
  },
  plate: {
    fontSize: hp(1.6),
    color: color.labelColor,
    fontWeight: "600",
  },
});

export default CarDetailsCard;
