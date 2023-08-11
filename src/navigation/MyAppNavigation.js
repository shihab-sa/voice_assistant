import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator();

function MyAppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      
    </Stack.Navigator>
  );
}

export default MyAppNavigation