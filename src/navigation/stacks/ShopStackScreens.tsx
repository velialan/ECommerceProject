import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ShopScreen} from '../../screens';
const Stack = createNativeStackNavigator();

const ShopStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};

export default ShopStackScreens;
