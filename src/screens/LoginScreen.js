import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters"; // Import moderateScale

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://storage.googleapis.com/a1aa/image/hj8EBswoB7QIGg39EI4AObGR2BsUQMGrtkwL04vSigY.jpg" }}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Milestone</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <TextInput style={styles.input} placeholder="User ID / Email" placeholderTextColor="#9ca3af" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#9ca3af" />

      <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e2e",
    padding: moderateScale(20),
  },
  logo: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    marginBottom: moderateScale(25),
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: moderateScale(8),
  },
  subtitle: {
    fontSize: moderateScale(16),
    color: "#d1d5db",
    marginBottom: moderateScale(20),
  },
  input: {
    width: "90%",
    padding: moderateScale(12),
    borderWidth: moderateScale(1),
    borderColor: "#374151",
    borderRadius: moderateScale(8),
    backgroundColor: "#2d2d3a",
    color: "#ffffff",
    fontSize: moderateScale(16),
    marginBottom: moderateScale(12),
  },
  buttonPrimary: {
    backgroundColor: "#3b82f6",
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(8),
    alignItems: "center",
    width: "90%",
    marginTop: moderateScale(10),
  },
  buttonText: {
    color: "white",
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
  forgotPassword: {
    marginTop: moderateScale(12),
    color: "#60a5fa",
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
});

export default LoginScreen;
