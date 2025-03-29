import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "react-native-size-matters";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate("Members");
  };

  const handleBack = () => {
    navigation.goBack(); // Navigate back
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Profile Information</Text>
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#9ca3af" value="Saket" />
          <TextInput style={styles.input} placeholder="Birthday (DD/MM)" placeholderTextColor="#9ca3af" />
          <TextInput style={styles.input} placeholder="Contact No." keyboardType="phone-pad" placeholderTextColor="#9ca3af" />

          <TouchableOpacity style={styles.buttonPrimary} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary} onPress={handleBack}>
            <Text style={styles.buttonSecondaryText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111827",
    paddingVertical: moderateScale(40),
  },
  card: {
    backgroundColor: "#1f2937",
    padding: moderateScale(25),
    borderRadius: moderateScale(12),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: moderateScale(4) },
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(5),
    elevation: moderateScale(6),
    width: "85%",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
    marginBottom: moderateScale(15),
    color: "#f9fafb",
  },
  input: {
    width: "100%",
    padding: moderateScale(12),
    borderWidth: 1,
    borderColor: "#374151",
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(12),
    fontSize: moderateScale(16),
    backgroundColor: "#374151",
    color: "#f9fafb",
  },
  buttonPrimary: {
    backgroundColor: "#2563eb",
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(8),
    alignItems: "center",
    width: "100%",
    marginTop: moderateScale(15),
  },
  buttonSecondary: {
    backgroundColor: "#374151",
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(8),
    alignItems: "center",
    width: "100%",
    marginTop: moderateScale(10),
  },
  buttonText: {
    color: "#f9fafb",
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
  buttonSecondaryText: {
    color: "#f9fafb",
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
});

export default ProfileScreen;
