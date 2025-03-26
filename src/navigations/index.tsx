import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from './types';

export const Stack = createNativeStackNavigator();

function Navigations() {
  return (
    <Stack.Navigator>
      {screens.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

export default Navigations;
