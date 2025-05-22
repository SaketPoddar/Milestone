import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';

const MembersScreen = () => {
  const navigation = useNavigation();

  const [members, setMembers] = useState([
    { id: '1', name: '', date: '', month: '', year: '', relation: 'Wife' },
    { id: '2', name: '', date: '', month: '', year: '', relation: 'Mother' },
    { id: '3', name: '', date: '', month: '', year: '', relation: 'Father' },
    { id: '4', name: '', date: '', month: '', year: '', relation: 'Friend' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <Text style={styles.relation}>{item.relation}</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.inputFull}
          placeholder="Enter name"
          placeholderTextColor="#A1A1A1"
          value={item.name}
          onChangeText={(text) => handleChange(index, 'name', text)}
        />
      </View>

      <View style={styles.row}>
        <View style={styles.inputGroupSmall}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.inputSmall}
            placeholder="DD"
            placeholderTextColor="#A1A1A1"
            keyboardType="numeric"
            maxLength={2}
            value={item.date}
            onChangeText={(text) => handleChange(index, 'date', text)}
          />
        </View>

        <View style={styles.inputGroupSmall}>
          <Text style={styles.label}>Month</Text>
          <TextInput
            style={styles.inputSmall}
            placeholder="MM"
            placeholderTextColor="#A1A1A1"
            keyboardType="numeric"
            maxLength={2}
            value={item.month}
            onChangeText={(text) => handleChange(index, 'month', text)}
          />
        </View>

        <View style={styles.inputGroupSmall}>
          <Text style={styles.label}>Year</Text>
          <TextInput
            style={styles.inputSmall}
            placeholder="YYYY"
            placeholderTextColor="#A1A1A1"
            keyboardType="numeric"
            maxLength={4}
            value={item.year}
            onChangeText={(text) => handleChange(index, 'year', text)}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Members</Text>

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: moderateScale(120) }}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    paddingHorizontal: moderateScale(20),
    paddingTop: moderateScale(40),
  },
  title: {
    fontSize: moderateScale(26),
    fontWeight: '700',
    color: 'white',
    marginBottom: moderateScale(20),
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1F2937',
    borderRadius: moderateScale(12),
    padding: moderateScale(20),
    marginBottom: moderateScale(15),
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  relation: {
    color: '#60A5FA',
    fontSize: moderateScale(18),
    fontWeight: '700',
    marginBottom: moderateScale(15),
  },
  inputGroup: {
    marginBottom: moderateScale(15),
  },
  inputGroupSmall: {
    flex: 1,
    marginRight: moderateScale(15),
  },
  label: {
    color: '#D1D5DB',
    fontSize: moderateScale(14),
    marginBottom: moderateScale(6),
  },
  inputFull: {
    backgroundColor: '#374151',
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(12),
    color: '#fff',
    fontSize: moderateScale(14),
  },
  inputSmall: {
    backgroundColor: '#374151',
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    color: '#fff',
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: moderateScale(20),
    left: moderateScale(20),
    right: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(40),
    borderRadius: moderateScale(8),
  },
  backButton: {
    backgroundColor: '#6B7280',
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(40),
    borderRadius: moderateScale(8),
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default MembersScreen;
