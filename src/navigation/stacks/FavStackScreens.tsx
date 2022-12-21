import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FavoriteScreen} from '../../screens';
const Stack = createNativeStackNavigator();

const FavoriteStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
    </Stack.Navigator>
  );
};

export default FavoriteStackScreens;
