import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import Ingredients from './Screens/Ingredients'
import RequestScreen from './Screens/RequestScreen';
import Recipes from './Screens/Recipes'
import RecipeScreen from './Screens/RecipeScreen';
import { RootStackParamList } from './stackParams';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

let Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
        <Stack.Screen name="RequestScreen" component={RequestScreen} />
        <Stack.Screen name="Recipes" component={Recipes} />
        <Stack.Screen name="Ingredients" component={Ingredients} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};



