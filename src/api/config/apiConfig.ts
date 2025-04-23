import axios from 'axios';
import Constants from 'expo-constants';


const getBaseUrl = () => {
  const ENV = Constants.expoConfig?.extra?.ENV || 'development';
  
  switch (ENV) {
    case 'production':
      return 'https://api.yourapp.com/v1';
    case 'staging':
      return 'https://staging-api.yourapp.com/v1';
    default:
      return 'https://dev-api.yourapp.com/v1';
  }
};

const apiClient = axios.create({
  baseURL: getBaseUrl(),
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = '1234';

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);


apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
 
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
   
        const newToken = await refreshToken();
   
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        

        return apiClient(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;


const getTokenFromStorage = async () => {
  // Implementation using SecureStore or AsyncStorage
};

const refreshToken = async () => {
  // Token refresh implementation
};