import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import TextNormal from "@/src/styles/TextNormal";
import TextBold from "@/src/styles/TextBold";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { spacing } from "@/src/styles/Spacing";
import { router } from "expo-router";


interface CommonHeaderProps {
    title: string;
  }
const CommonHeader: React.FC<CommonHeaderProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftBox}>
            <TouchableOpacity onPress={()=>{router.back()}}>
           <FontAwesome6 name="arrow-left-long" size={20} color="#333333" style={{marginTop:hp(0.5)}}/>
            </TouchableOpacity>
                <View style={styles.nameContainer}>
                    <TextNormal style={styles.nameText}>{title}</TextNormal>
                </View>
            </View>
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    leftBox: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    nameContainer: {
        paddingHorizontal: spacing.xxl
    },
    nameText: {
        fontSize: hp(2.3),
        fontWeight:'500'
    },
    rightBox: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    notiIcon: {
        paddingRight: spacing.sm, 
        paddingTop: spacing.xs
    }
})

export default CommonHeader;
