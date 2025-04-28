import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import TimelineItem from "./TimeLineItems";


interface TimelineDataItem {
  title: string;
  address: string;
}

interface UpdateLocationResponse {
  success: boolean;
  message?: string;
  error?: string;
}


const updateLocation = async (location: string): Promise<UpdateLocationResponse> => {
  try {
    console.log(`Location updated to: ${location}`);
    return { success: true, message: `Location updated to ${location}` };
  } catch (error: any) {
    console.error("Error updating location:", error);
    return { success: false, error: error.message };
  }
};

const timelineData: TimelineDataItem[] = [
  { title: "Indore", address: "123 Main Street, San Francisco" },
  { title: "Dhule", address: "123 Main Street, San Francisco" },
  { title: "Shirdi", address: "123 Main Street, San Francisco" },
  { title: "Ahilya nagar", address: "123 Main Street, San Francisco" },
];

const TimeLine: React.FC = () => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  const handleLocationSelect = async (item: TimelineDataItem, index: number) => {
    if (selectedIndexes.includes(index)) {
      console.log("Already selected, no API call.");
      return;
    }


    setSelectedIndexes((prevIndexes) => [...prevIndexes, index]);

    
    const result = await updateLocation(item.title);
    if (result.success) {
      console.log("Location updated successfully");
    } else {
      console.error("Failed to update location");
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      {timelineData.map((item, index) => (
        <TouchableOpacity 
          onPress={() => handleLocationSelect(item, index)} 
          key={index}
        >
          <TimelineItem
            title={item.title}
            address={item.address}
            color={selectedIndexes.includes(index) ? '#FF0000' : '#4e6ef2'}
            isLast={index === timelineData.length - 1}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TimeLine;
