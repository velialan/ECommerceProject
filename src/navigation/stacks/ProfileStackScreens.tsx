import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from '../../screens';
const Stack = createNativeStackNavigator();

const ProfileStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackScreens;
