import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import ChoiceLogin from './pages/Login/ChoiceLogin';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="ChoiceLogin" component={ChoiceLogin} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
