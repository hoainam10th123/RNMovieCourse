/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './screens/Details';
import NavBar from './components/NavBar';
import Search from './screens/Search';
import HeaderSearch from './components/HeaderSearch';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Detail: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home} options={{
            headerTransparent: true,
            header: (navigation) => <NavBar main={true} onBack={navigation.navigation.goBack} />
          }}
        />

        <Stack.Screen name="Detail" component={Detail} options={{
          headerTransparent: true,
          header: ({navigation}) => <NavBar onBack={navigation.goBack} />
        }} />

        <Stack.Screen
          name="Search"
          component={Search} options={{
            headerTransparent: true,
            header: ({navigation, route, back, options}) => <HeaderSearch onBack={navigation.goBack} />
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
