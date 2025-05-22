import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
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

    const renderItem = ({ item, index }) => (
        <View style={styles.row}>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                placeholderTextColor="#A1A1A1"
                value={item.name}
                onChangeText={(text) => {
                    const newMembers = [...members];
                    newMembers[index].name = text;
                    setMembers(newMembers);
                }}
            />
            <TextInput
                style={styles.inputSmall}
                value={item.date}
                placeholderTextColor="#A1A1A1"
                onChangeText={(text) => {
                    const newMembers = [...members];
                    newMembers[index].date = text;
                    setMembers(newMembers);
                }}
            />
            <TextInput
                style={styles.inputSmall}
                value={item.month}
                placeholderTextColor="#A1A1A1"
                onChangeText={(text) => {
                    const newMembers = [...members];
                    newMembers[index].month = text;
                    setMembers(newMembers);
                }}
            />
            <Text style={styles.relation}>{item.relation}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Members</Text>

            {/* Header Row */}
            <View style={styles.headerRow}>
                <Text style={styles.headerText}>Name</Text>
                <Text style={styles.headerText}>Date</Text>
                <Text style={styles.headerText}>Month</Text>
                <Text style={styles.headerText}>Relation</Text>
            </View>

            <View style={{ width: '100%' }}>
                <FlatList
                    data={members}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111827',
        padding: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: moderateScale(22),
        fontWeight: 'bold',
        marginBottom: moderateScale(15),
        textAlign: 'center',
        color: 'white',
    },
    headerRow: {
        flexDirection: 'row',
        width: '100%',
        padding: moderateScale(10),
        backgroundColor: '#333',
        borderRadius: moderateScale(8),
        marginBottom: moderateScale(10),
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: moderateScale(14),
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#2D2D2D',
        padding: moderateScale(10),
        borderRadius: moderateScale(8),
        marginBottom: moderateScale(10),
        alignItems: 'center',
        width: '100%',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#555',
        padding: moderateScale(8),
        borderRadius: moderateScale(5),
        marginHorizontal: moderateScale(5),
        backgroundColor: '#3A3A3A',
        color: 'white',
        fontSize: moderateScale(14),
    },
    inputSmall: {
        borderWidth: 1,
        borderColor: '#555',
        padding: moderateScale(8),
        borderRadius: moderateScale(5),
        marginHorizontal: moderateScale(5),
        backgroundColor: '#3A3A3A',
        color: 'white',
        width: moderateScale(80),
        fontSize: moderateScale(14),
    },
    relation: {
        width: moderateScale(80),
        textAlign: 'center',
        color: 'white',
        fontSize: moderateScale(14),
    },
    button: {
        backgroundColor: '#2563EB',
        padding: moderateScale(12),
        borderRadius: moderateScale(8),
        alignItems: 'center',
        marginTop: moderateScale(10),
        width: '50%',
    },
    buttonText: {
        color: 'white',
        fontSize: moderateScale(16),
        fontWeight: 'bold',
    },
    backButton: {
        marginTop: moderateScale(10),
        padding: moderateScale(10),
        backgroundColor: '#6B7280',
        borderRadius: moderateScale(8),
        alignItems: 'center',
        width: '50%',
    },
});

export default MembersScreen;
