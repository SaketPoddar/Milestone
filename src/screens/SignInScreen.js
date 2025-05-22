import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  const handleSignIn = () => {
    navigation.navigate("Profile");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://storage.googleapis.com/a1aa/image/hj8EBswoB7QIGg39EI4AObGR2BsUQMGrtkwL04vSigY.jpg' }}
          style={styles.logo}
        />
        <Text style={styles.title}>Milestone</Text>
        <Text style={styles.subtitle}>A single megabyte can protect a lifetime of memories and connections.</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="User ID / Email"
          placeholderTextColor="#bbb"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#bbb"
          secureTextEntry
        />
        <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or</Text>

        <TouchableOpacity style={styles.businessButton}>
          <Text style={styles.businessButtonText}>Sign In as Business</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={[styles.checkbox, isChecked && styles.checkedCheckbox]} />
          <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
        </View>

        <Text style={styles.newToText}>
          New to Milestone? <Text style={styles.createAccountText}>Create an account</Text>
        </Text>
      </View>

      <Text style={styles.quoteText}>"Save the date, save the bond!"</Text>
      <Text style={styles.quoteText}>"Your smart way to never miss a special day!"</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(20),
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: moderateScale(20),
  },
  logo: {
    width: moderateScale(100),
    height: moderateScale(100),
    marginBottom: moderateScale(1),
    borderRadius: moderateScale(50),
    marginVertical: moderateScale(28),
  },
  title: {
    color: '#fff',
    fontSize: moderateScale(26),
    fontWeight: 'bold',
    marginBottom: moderateScale(5),
  },
  subtitle: {
    color: '#ccc',
    textAlign: 'center',
    fontSize: moderateScale(14),
    marginBottom: moderateScale(20),
  },
  formContainer: {
    backgroundColor: '#1e1e1e',
    padding: moderateScale(20),
    borderRadius: moderateScale(12),
    width: '100%',
    marginBottom: moderateScale(20),
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: moderateScale(2) },
    shadowRadius: moderateScale(4),
  },
  input: {
    borderWidth: moderateScale(1),
    borderColor: '#444',
    borderRadius: moderateScale(8),
    padding: moderateScale(12),
    marginBottom: moderateScale(15),
    color: '#fff',
    backgroundColor: '#2a2a2a',
  },
  signInButton: {
    backgroundColor: '#4a90e2',
    padding: moderateScale(15),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    marginBottom: moderateScale(15),
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  orText: {
    textAlign: 'center',
    color: '#bbb',
    marginBottom: moderateScale(15),
    fontSize: moderateScale(14),
  },
  businessButton: {
    backgroundColor: '#6a5acd',
    padding: moderateScale(15),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    marginBottom: moderateScale(15),
  },
  businessButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  forgotPasswordText: {
    color: '#4a90e2',
    textAlign: 'right',
    marginBottom: moderateScale(15),
    fontSize: moderateScale(14),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(15),
  },
  checkbox: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderWidth: moderateScale(1),
    borderColor: '#bbb',
    borderRadius: moderateScale(4),
    marginRight: moderateScale(10),
  },
  checkedCheckbox: {
    backgroundColor: '#4a90e2',
  },
  checkboxLabel: {
    color: '#bbb',
    fontSize: moderateScale(14),
  },
  newToText: {
    textAlign: 'center',
    color: '#bbb',
    fontSize: moderateScale(14),
  },
  createAccountText: {
    color: '#4a90e2',
    fontWeight: 'bold',
  },
  quoteText: {
    color: '#ccc',
    textAlign: 'center',
    marginBottom: moderateScale(10),
    fontStyle: 'italic',
    fontSize: moderateScale(14),
  },
  backButton: {
    backgroundColor: '#374151',
    padding: moderateScale(12),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    width: '20%',
    marginTop: moderateScale(10),
    alignSelf: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
});

export default SignInScreen;
