import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import NotificationScreen from '../screens/Notifications';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PrivilegeScreen from '../screens/Privilege';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={DefaultStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const DefaultStack = ({route}: any) => {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Stack.Screen name="InnerHome" component={HomeScreen} />
      <Stack.Screen name="PrivilegeDetailScreen" component={PrivilegeScreen} />
      <Stack.Screen name="Profile" component={ProfileStack} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default NavigationProvider;
