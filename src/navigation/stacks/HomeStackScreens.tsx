import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens';
import ProductDetail from '../../screens/details/ProductDetail';
const Stack = createNativeStackNavigator();

const HomeStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />

    </Stack.Navigator>
  );
};

export default HomeStackScreens;
