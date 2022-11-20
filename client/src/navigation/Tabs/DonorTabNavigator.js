import Onboarding from "../../screens/OnBoarding";
import Home from "../../screens/Home";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BottomNav from "../../components/BottomNav";
import History from "../../screens/History";
import Profile from "../../screens/Profile";
import Notifications from "../../screens/Notifications";

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
      name="History"
      component={History}
      options={{icon: "home"}}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{icon: "home"}}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{icon: "home"}}
    />
  </Tab.Navigator>
);
