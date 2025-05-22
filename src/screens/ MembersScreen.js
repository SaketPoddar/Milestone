import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';

const MembersScreen = () => {
  const navigation = useNavigation();

  const [members, setMembers] = useState([
    { id: '1', name: '', date: '', month: '', relation: 'Wife' },
    { id: '2', name: '', date: '', month: '', relation: 'Mother' },
    { id: '3', name: '', date: '', month: '', relation: 'Father' },
    { id: '4', name: '', date: '', month: '', relation: 'Friend' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          placeholderTextColor="#A1A1A1"
          value={item.name}
          onChangeText={(text) => handleChange(index, 'name', text)}
        />
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.label}>Date:</Text>
        <TextInput
          style={styles.inputSmall}
          placeholder="DD"
          placeholderTextColor="#A1A1A1"
          keyboardType="numeric"
          value={item.date}
          onChangeText={(text) => handleChange(index, 'date', text)}
        />
        <Text style={[styles.label, { marginLeft: moderateScale(10) }]}>Month:</Text>
        <TextInput
          style={styles.inputSmall}
          placeholder="MM"
          placeholderTextColor="#A1A1A1"
          keyboardType="numeric"
          value={item.month}
          onChangeText={(text) => handleChange(index, 'month', text)}
        />
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.label}>Relation:</Text>
        <Text style={styles.relation}>{item.relation}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Family Members</Text>
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: moderateScale(80) }}
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
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: 'white',
    marginBottom: moderateScale(20),
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1F2937',
    borderRadius: moderateScale(12),
    padding: moderateScale(15),
    marginBottom: moderateScale(15),
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(10),
  },
  label: {
    color: '#E5E7EB',
    fontSize: moderateScale(14),
    width: moderateScale(70),
  },
  input: {
    flex: 1,
    backgroundColor: '#374151',
    borderRadius: moderateScale(6),
    padding: moderateScale(8),
    color: 'white',
    fontSize: moderateScale(14),
  },
  inputSmall: {
    width: moderateScale(70),
    backgroundColor: '#374151',
    borderRadius: moderateScale(6),
    padding: moderateScale(8),
    color: 'white',
    fontSize: moderateScale(14),
  },
  relation: {
    color: '#93C5FD',
    fontSize: moderateScale(14),
    fontWeight: '600',
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
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(30),
    borderRadius: moderateScale(8),
  },
  backButton: {
    backgroundColor: '#6B7280',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(30),
    borderRadius: moderateScale(8),
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MembersScreen;
