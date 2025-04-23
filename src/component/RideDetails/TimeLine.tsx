import React from "react";
import { View } from "react-native";
import TimelineItem from "./TimeLineItems";



const timelineData = [
  { title: "Pickup Location", address: "123 Main Street, San Francisco", color: "red" },
  { title: "Stop 1", address: "123 Main Street, San Francisco", color: "red" },
  { title: "Stop 1", address: "123 Main Street, San Francisco", color: "#4e6ef2" },
  { title: "Drop-Off Destination", address: "123 Main Street, San Francisco", color: "#4e6ef2" },
];

const TimeLine = () => {
  return (
    <View style={{marginTop: 20 }}>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          address={item.address}
          color={item.color}
          isLast={index === timelineData.length - 1}
        />
      ))}
    </View>
  );
};

export default TimeLine;
