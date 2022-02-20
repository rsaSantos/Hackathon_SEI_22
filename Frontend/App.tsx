import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ingredients from './Screens/Ingredients'
import RequestScreen from './Screens/RequestScreen';
import Recipes from './Screens/Recipes'
import RecipeScreen from './Screens/RecipeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={RequestScreen} />
        <Tab.Screen name="Lista_de_Compras" component={Ingredients} initialParams={{number: 0}}/>
        <Tab.Screen name="Receitas" component={Recipes} />
        <Tab.Screen name="Receita" component={RecipeScreen} initialParams={{nome: "parametro"}}/>
      </Tab.Navigator>

    </NavigationContainer>

  );
};



