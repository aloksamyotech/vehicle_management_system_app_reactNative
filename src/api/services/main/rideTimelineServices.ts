import { AxiosError, AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import apiClient, { getTokenFromStorage } from '../../config/apiConfig';
import endpoints from '../../config/endpoints';
import STORAGE_KEYS from '@/src/constants/authConstants';
import { RideApiResponse } from '@/src/component/RideTimeLine/RideTypes';
import { Booking, BookingApiResponse } from '@/src/component/dashboard/RideTypes';
import { ExpenseData, ExpenseResponse } from '@/src/component/dashboard/expenseTypes';



interface ApiError {
  message: string;
  code?: string;
}

// In-memory cache for bookings
let cachedTodayBookings: Booking[] = [];
let lastFetchTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const handleApiError = (error: AxiosError<any>): Error => {
  const message = error.response?.data?.message || error.message || 'An unknown error occurred';
  return new Error(message);
};



export const rideTimelineServices = {
  


  getDriverRides: async (driverId: string): Promise<RideApiResponse> => {
    try {
      const token = await getTokenFromStorage();
     console.log(driverId)
      if (!token) {
        throw new Error("Authentication token not found");
      }

      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const response: AxiosResponse<RideApiResponse> = await apiClient.get(
        `${endpoints.rideTimeLine.getRideData}/${driverId}`
      );

    
      return response.data;
    } catch (error) {
      console.error("Error fetching driver rides:", error);

      throw handleApiError(error as AxiosError);
    }
  },

  getTodayBookings: async (driverId: string): Promise<Booking[]> => {
    try {
      console.log(driverId,"---------")
      const currentTime = Date.now();
      if (

        cachedTodayBookings.length > 0 && 
        currentTime - lastFetchTime < CACHE_DURATION
      ) {
        console.log('Returning cached bookings data');
        return cachedTodayBookings;
      }
      
      const token = await getTokenFromStorage();

      if (!token) {
        throw new Error("Authentication token not found");
      }

      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const response: AxiosResponse<BookingApiResponse> = await apiClient.get(
        `${endpoints.rideTimeLine.getTodaysRide}/${driverId}`
      );
    
      if (response.data.success) {
        // Update cache
        cachedTodayBookings = response.data.data;
        lastFetchTime = currentTime;
        return response.data.data;
      } else {
        throw new Error(response.data.message || 'Failed to fetch bookings');
      }
    } catch (error) {
      console.error("Error fetching today's bookings:", error);
      throw handleApiError(error as AxiosError);
    }
  },
  saveExpense: async (expenseData: ExpenseData): Promise<ExpenseResponse> => {
    try {
      const token = await getTokenFromStorage();
      
      if (!token) {
        throw new Error("Authentication token not found");
      }
      
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      const response: AxiosResponse<ExpenseResponse> = await apiClient.post(
        endpoints.rideTimeLine.addExpenses,
        expenseData
      );
      
      console.log('Expense added successfully:', response.data);
      
      return response.data;
    } catch (error) {
      console.error("Error saving expense:", error);
      throw handleApiError(error as AxiosError);
    }
  },
  
  
  // Clear the cache
  clearBookingsCache: () => {
    cachedTodayBookings = [];
    lastFetchTime = 0;
  },
  
  // Get current cached bookings without fetching
  getCachedBookings: (): Booking[] => {
    return cachedTodayBookings;
  },
  
  // Check if we have valid cached data
  hasCachedBookings: (): boolean => {
    const currentTime = Date.now();
    return cachedTodayBookings.length > 0 && 
           currentTime - lastFetchTime < CACHE_DURATION;
  }
};

export default rideTimelineServices;



