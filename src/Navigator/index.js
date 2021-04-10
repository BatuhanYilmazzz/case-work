import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductListScreen} from '../Screens';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductListScreen} />
      <Tab.Screen name="Cart" component={ProductListScreen} />
      <Tab.Screen name="Coupons" component={ProductListScreen} />
      <Tab.Screen name="Profile" component={ProductListScreen} />
    </Tab.Navigator>
  );
}
