import {View, Text} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
 import {Fav, Home, ShoppingBag, ShoppingCart, User} from '../components/icons'
import useTheme from '../providers/theme.provider'
import { BagStackScreens, FavoriteStackScreens, HomeStackScreens, ProfileStackScreens, ShopStackScreens } from './stacks'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  const {mode} = useTheme()

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarInactiveTintColor: '#9B9B9B',
        tabBarActiveTintColor: '#DB3022',
        headerShown: false,
        tabBarStyle: {
          height: 83,
          position: 'absolute',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor: mode === 'light' ? 'white' : 'black',
        },
      }}>
      <Tab.Screen
        name='Home'
        options={{
          tabBarIcon: ({color, size}) => <Home height={size} width={size} stroke={color} />,
        }}
        component={HomeStackScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => <ShoppingCart height={size} width={size} stroke={color} />,
        }}
        name='Shop'
        component={ShopStackScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => <ShoppingBag height={size} width={size} stroke={color} />,
        }}
        name='Bag'
        component={BagStackScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => <Fav height={size} width={size} stroke={color} />,
        }}
        name='Favorite'
        component={FavoriteStackScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => <User height={size} width={size} stroke={color} />,
        }}
        name='Profile'
        component={ProfileStackScreens}
      />
    </Tab.Navigator>
  )
}

export default BottomTab
