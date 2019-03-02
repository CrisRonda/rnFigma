
/*
Instalar react navigation v3 y sus handle gesture, manualmente agregar las lineas en MainActivity.java de la documentacion
 */
import React, { Component } from 'react';

import LayoutLogin from './src/login/loginLayout'
import LayoutHome from './src/home/home'
import LayoutExhibition from './src/home/exhibition'
import customDrawer from './src/home/customDrawer'
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator, DrawerItems } from 'react-navigation';
import { TouchableOpacity } from 'react-native'
import { Container, Content, Icon, Text, View } from 'native-base'



const DrawerNavigator = createDrawerNavigator({
  Exhibition: {
    screen: LayoutExhibition,
  },
  Home: {
    screen: LayoutHome
  },
},
  {
    // drawerWidth: 250,
    drawerPosition: 'left',
    initialRouteName: 'Home',
    contentComponent: customDrawer,
  });

const SwitchNavigator = createSwitchNavigator({
  Login: {
    screen: LayoutLogin,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: DrawerNavigator,
  },
});


const App = createAppContainer(SwitchNavigator);

export default App;