import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen'
import SignInScreen from "../screens/SignInScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MembersScreen from "../screens/ MembersScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Members" component={MembersScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;