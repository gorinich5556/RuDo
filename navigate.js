import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acuunt from './components/accunt';
import Work from './components/work';
import NavigateMenu from './components/navigation_menu';


const Stack = createNativeStackNavigator();

function Navigater() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
        component={Acuunt}
        options={{ headerShown: false,
            transitionConfig : () => ({
                transitionSpec: {
                  duration: 0,
                  timing: Animated.timing,
                  easing: Easing.step0,
                  },
              }),
        }}
         />
        <Stack.Screen name="Details"
        component={Work}
        options={{
        headerShown: false,
        transitionConfig : () => ({
            transitionSpec: {
              duration: 0,
              timing: Animated.timing,
              easing: Easing.step0,
              },
          }),
         }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigater;