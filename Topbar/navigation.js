import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./component/Home";
import Settings from "./component/Settings";

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default MyTabs;
