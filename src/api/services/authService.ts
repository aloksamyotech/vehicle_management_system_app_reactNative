import axios, { AxiosResponse, AxiosError } from 'axios';
import apiClient from '../config/apiConfig';
import endpoints from '../config/endpoints';
import { handleApiError } from '../utils/errorHandlers';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;

  };

}

interface LogoutResponse {
  success: boolean;
  message: string;
}

export const authService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response: AxiosResponse<LoginResponse> = await apiClient.post(
        endpoints.auth.login, 
        { email, password }
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error as AxiosError);
    }
  },
  
  logout: async (): Promise<LogoutResponse> => {
    try {
      const response: AxiosResponse<LogoutResponse> = await apiClient.post(
        endpoints.auth.logout
      );
      return response.data;
    } catch (error) {
      throw handleApiError(error as AxiosError);
    }
  },
};