
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AgentHomeScreen from './screens/AgentHomeScreen';
import SettingsScreen from './screens/SettingsScreen';


function AgentNavigation() {
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{headerShown: false}}
      >
        <Tabs.Screen 
          name="Home" 
          component={AgentHomeScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Icon 
                  name="list"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              );
            }
          }}
        />
        <Tabs.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Icon 
                  name="gear"
                  type="font-awesome"
                  color={color}
                  size={size}
                />
              );
            }
          }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default AgentNavigation;