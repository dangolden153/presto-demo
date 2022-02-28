import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native";
import TabOne from './TabOne';
import TabTwo from './TabTwo';

const Tab = createMaterialTopTabNavigator();

const TransactionsTopTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="TabOne" component={TabOne} />
      <Tab.Screen name="TabTwo" component={TabTwo} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TransactionsTopTab

const styles = StyleSheet.create({})

