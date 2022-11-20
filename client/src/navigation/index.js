import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Text} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {authenticate} from "../redux/slices/auth.slice";
import {createStackNavigator} from "@react-navigation/stack";

import Onboarding from "../screens/OnBoarding";
import Home from "../screens/Home";
import SignUp from "../screens/Account/SignUp";
import SignIn from "../screens/Account/SignIn";
import ChooseAccountType from "../screens/Account/ChooseAccountType";
import SelectLocation from "../screens/SelectLocation";
import DonationPackStart from "../screens/DonationPack/DonationPackStart";
import DonationPackSelect from "../screens/DonationPack/DonationPackSelect";
import DonationCard from "../screens/DonationPack/Cards/DonationCard";
import DonationPackCards from "../screens/DonationPack/DonationPackCards";
import BottomNav, { DonorTabNavigator } from "../components/BottomNav";


const Stack = createStackNavigator();

const Navigator = () => {
  const {checked, loggedIn} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate({loggedIn: true, checked: true}));
  }, []);

  // TODO: switch router by loggedIn state
  console.log("[##] loggedIn", loggedIn);

  return checked ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen
          name="Home"
          component={DonorTabNavigator}
          screenOptions={{headerShown: false}}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ChooseAccountType" component={ChooseAccountType} />
        <Stack.Screen name="SelectLocation" component={SelectLocation} />
        <Stack.Screen name="DonationPackStart" component={DonationPackStart} />
        <Stack.Screen
          name="DonationPackSelect"
          component={DonationPackSelect}
        />
        <Stack.Screen name="DonationCard" component={DonationCard} />
        <Stack.Screen name="DonationPackCards" component={DonationPackCards} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Text>Loading...</Text>
  );
};

export default Navigator;
