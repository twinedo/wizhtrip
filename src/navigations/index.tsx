import { Detail, Home, SplashScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Navigations() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="Detail" 
        component={Detail} 
        options={{
          headerShown: false
        }} 
      />
    </Stack.Navigator>
  );
}

export default Navigations