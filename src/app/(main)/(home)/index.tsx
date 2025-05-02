import React, { useEffect, useState, useCallback, useMemo } from "react";
import { View, StyleSheet, ActivityIndicator, Text, Button } from "react-native";
import OuterContainer from "@/src/styles/OuterContainer";
import DashboardHeader from "@/src/component/dashboard/DashboardHeader";
import AssignedRideBox from "@/src/component/dashboard/AssignedRideBox";
import CarDetailsCard from "@/src/component/dashboard/CarDetailsCard";
import CustomerDetailsCard from "@/src/component/dashboard/CustomerDetailsCard";
import { spacing } from "@/src/styles/Spacing";

// Create a context to share the data
import { createContext } from 'react';
import rideTimelineServices from "@/src/api/services/main/rideTimelineServices";
import { Booking } from "@/src/component/dashboard/RideTypes";

// Create Context for Bookings Data with complete interface
export const BookingsContext = createContext<{
  bookings: Booking[];
  loading: boolean;
  error: string | null;
  refreshBookings: () => Promise<void>;
}>({
  bookings: [],
  loading: false,
  error: null,
  refreshBookings: async () => {}  
});

const Dashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  
  const fetchBookings = useCallback(async () => {
    try {
      setLoading(true);
      console.log("Fetching bookings...");
      
      const driverId = 1; 
      const response = await rideTimelineServices.getTodayBookings(driverId);
      
      console.log("API Response:", JSON.stringify(response, null, 2));
      
     
      if (!response) {
        throw new Error("No data received from API");
      }
      
   
      const bookingsData = Array.isArray(response) ? response : [];
      console.log(`Setting ${bookingsData.length} bookings`);
      
      setBookings(bookingsData);
      setError(null);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch bookings';
      setError(errorMessage);
      console.error('Error fetching bookings:', errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    console.log("Dashboard mounted, fetching bookings");
    fetchBookings();
  }, [fetchBookings]);
  
  
  useEffect(() => {
    console.log("Current bookings:", bookings);
  }, [bookings]);

  
  const contextValue = useMemo(() => ({
    bookings,
    loading,
    error,
    refreshBookings: fetchBookings
  }), [bookings, loading, error, fetchBookings]);
  
 
  console.log("Dashboard render state:", { 
    bookingsLength: bookings.length, 
    loading, 
    error,
    contextHasBookings: contextValue.bookings.length > 0
  });
  
  if (loading && bookings.length === 0) {
    return (
      <OuterContainer>
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Loading your dashboard...</Text>
        </View>
      </OuterContainer>
    );
  }

 
  // Show a message if bookings array is empty but loading completed without error


  return (
    <BookingsContext.Provider value={contextValue}>
      <OuterContainer>
        <View style={{ flex: 3 }}>
          <DashboardHeader />
          <AssignedRideBox />
        </View>
        <View style={{ flex: 2, marginTop: spacing.lg }}>
          <CarDetailsCard />
          <CustomerDetailsCard />
        </View>
      </OuterContainer>
    </BookingsContext.Provider>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  loadingText: {
    marginTop: spacing.md,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default Dashboard;