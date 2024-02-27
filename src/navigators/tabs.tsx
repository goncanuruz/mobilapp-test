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
        <Tab.Screen options={{}} name="Home" component={HomeScreen} />
        <Tab.Screen
          name="InnerScreen"
          options={{
            tabBarButton(props) {
              return null;
            },
          }}
          component={DefaultStack}
        />
        {/* <Stack.Screen name="Profile" component={ProfileStack} /> */}
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
      <Stack.Screen name="PrivilegeDetailScreen" component={PrivilegeScreen} />
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
