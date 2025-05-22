import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";

//saket check changes

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Members");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Your Profile</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#9CA3AF"
          />

          <Text style={styles.label}>Birthday</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YY"
            placeholderTextColor="#9CA3AF"
          />

          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Text style={styles.backText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#111827",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: moderateScale(50),
    paddingBottom: moderateScale(30),
  },
  header: {
    fontSize: moderateScale(26),
    fontWeight: "bold",
    color: "#F9FAFB",
    marginBottom: moderateScale(30),
  },
  card: {
    width: "88%",
    backgroundColor: "#1F2937",
    borderRadius: moderateScale(14),
    padding: moderateScale(20),
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  label: {
    fontSize: moderateScale(14),
    color: "#D1D5DB",
    marginBottom: moderateScale(6),
    marginTop: moderateScale(10),
  },
  input: {
    width: "100%",
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(12),
    backgroundColor: "#374151",
    borderRadius: moderateScale(8),
    color: "#F9FAFB",
    fontSize: moderateScale(16),
  },
  submitButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(8),
    alignItems: "center",
    marginTop: moderateScale(24),
  },
  submitText: {
    color: "#FFFFFF",
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
  backButton: {
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(8),
    alignItems: "center",
    marginTop: moderateScale(12),
    backgroundColor: "#4B5563",
  },
  backText: {
    color: "#F9FAFB",
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
});

export default ProfileScreen;
