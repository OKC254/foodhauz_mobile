import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Onboarding from "../screens/OnBoarding";
import SignUp from "../screens/Account/SignUp";
import SignIn from "../screens/Account/SignIn";
import ChooseAccountType from "../screens/Account/ChooseAccountType";
import SelectLocation from "../screens/SelectLocation";
import DonationPackCards from "../screens/DonationPack/DonationPackCards";
import { DonorTabNavigator } from "./Tabs/DonorTabNavigator";
import { DonationPageNavigator } from "./Tabs/DonationPageNavigator";
import Profile from "../screens/Profile";
import History from "../screens/History";
import Notifications from "../screens/Notifications";
import { useAuth } from "../hooks/useAuth";
import DonationHistoryCards from "../screens/DonationHistory/ViewDonationsHistory/DonationHistoryCards";
import TopDonationCards from "../screens/DonationHistory/TopDonationsHistory/TopDonationCards";


const Stack = createStackNavigator();
const Tab = createStackNavigator()

const Navigator = () => {
  const auth = useAuth();

  // TODO: switch router by loggedIn state
  console.log("[##] loggedIn", auth.user);

  function Unauthenticated () {
    return (
      <Tab.Navigator
        initialRouteName="Onboarding"
        screenOptions={{headerShown: false}}
      >
        <Tab.Screen name="Onboarding" component={Onboarding} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="SignIn" component={SignIn} />

    
        <Tab.Screen name="TopDonationCards" component={TopDonationCards} />
        <Tab.Screen name="DonationHistoryCards" component={DonationHistoryCards} />
        
        
        <Tab.Screen name="ChooseAccountType" component={ChooseAccountType} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.user ? (
            <Stack.Group>
              <Stack.Screen
                name="DonorDashboard"
                component={DonorTabNavigator}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="RecepientDashboard"
                component={DonorTabNavigator}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="SelectLocation"
                component={SelectLocation}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="DonationPackStart"
                component={DonationPageNavigator}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="DonationPackCards"
                component={DonationPackCards}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="History"
                component={History}
                options={{headerShown: false}}
              />
            </Stack.Group>
        ) : (
          <Stack.Screen
            name="Unauthenticated"
            component={Unauthenticated}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
