import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BagScreen} from '../../screens';
const Stack = createNativeStackNavigator();

const BagStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Bag" component={BagScreen} />
    </Stack.Navigator>
  );
};

export default BagStackScreens;
