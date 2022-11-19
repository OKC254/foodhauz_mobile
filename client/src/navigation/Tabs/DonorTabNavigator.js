import Onboarding from "../../screens/OnBoarding";
import Home from "../../screens/Home";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BottomNav from "../../components/BottomNav";

const Tab = createBottomTabNavigator();

export const DonorTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="DonorHomePage"
    tabBar={(props) => <BottomNav {...props} />}
  >
    <Tab.Screen
      name="DonorHomePage"
      component={Home}
      options={{icon: "home", headerShown: false}}
    />
    <Tab.Screen
      name="OnBoarding"
      component={Onboarding}
      options={{icon: "home"}}
    />
    <Tab.Screen
      name="History"
      component={Onboarding}
      options={{icon: "home"}}
    />
    <Tab.Screen
      name="Profile"
      component={Onboarding}
      options={{icon: "home"}}
    />
  </Tab.Navigator>
);
