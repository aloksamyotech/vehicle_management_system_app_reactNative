import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import TextBold from "@/src/styles/TextBold";
import { authService } from "@/src/api";
import useLoginDataStorage from "@/src/hooks/customStorageHook";
import { useToast } from "@/src/hooks/useToast";
import { useRouter } from "expo-router";




interface ApiError {
  message: string;
  status: number;
}


const Login: React.FC = () => {
  const [email,setEmail] = useState('');
  const [password,setPassWord] =useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const {storeLoginData,loginData} = useLoginDataStorage();
  const { showToast } = useToast();
  const router = useRouter();

  useEffect(()=>{
    if(loginData){
      router.push("/(main)/(home)")
    }
  },[loginData])
 
  const handleLogin = async () => {
    setLoading(true);
    setError('');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email || !password) {
      setError('Email and password are required');
      showToast('error', 'Please enter both email and password');
      setLoading(false);
      return;
    }
  
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      showToast('error', 'Please enter a valid email');
      setLoading(false);
      return;
    }
  
    try {
      const loginData = {
        email,
        password,
        userId: '1234'
      };
      console.log(loginData, 'loginData');
  
  
      if (loginData) {
        await storeLoginData(loginData);
        console.log("✅ storeLoginData exists?", typeof storeLoginData);
        showToast('success', 'Login successfully');
        router.push("/(main)/(home)");
      }
    } catch (error) {
      const apiError = error as ApiError;
      setError(apiError.message || 'Login failed');
      showToast('error', apiError.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };
  
 
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextBold style={styles.heading}>Log in</TextBold>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#aaa"
          onChangeText={(value)=>setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#aaa"
          onChangeText={(value)=>{setPassWord(value)}}
        />
          <Text style={styles.loginText}>Log In</Text>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </View>



      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "85%",
  },
  heading: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color:'#3461FD',
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    color: "#007BFF",
    textAlign: "right",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",

  },
  signupText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
  },
  signupLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default Login;



