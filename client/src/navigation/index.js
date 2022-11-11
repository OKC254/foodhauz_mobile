import React, {useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Text} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import {authenticate} from "../redux/slices/auth.slice";
import {createStackNavigator} from "@react-navigation/stack";

import Onboarding from "../screens/OnBoarding";


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
        </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <Text>Loading...</Text>
  );
};

export default Navigator;
