import RecepientDashboard from "../../screens/Dashboards/RecepientDash";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import History from "../../screens/History";
import Profile from "../../screens/Profile";
import Notifications from "../../screens/Notifications";
import BottomNavRecepient from "../../components/BottomNavRecepients";

const Tab = createBottomTabNavigator();

export const RecepientTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="RecepientHomePage"
    tabBar={(props) => <BottomNavRecepient {...props} />}
  >
    <Tab.Screen
      name="RecepientHomePage"
      component={RecepientDashboard}
      options={{icon: "home", headerShown: false}}
    />
    <Tab.Screen
      name="History"
      component={History}
      options={{icon: "home", headerShown: false}}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{icon: "home", headerShown: false}}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{icon: "home", headerShown: false}}
    />
  </Tab.Navigator>
);
