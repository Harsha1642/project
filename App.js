import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Screen1 from './screen1'
import Screen2 from './screen2'
import Screen3 from './screen3'
import ColorScreen from './Screens/ColorScreen'
import Counter from './Screens/Counter'
import Screen from './Screens/screen'



const App=createStackNavigator({
  
          HomeScreen:Screen,
          Home:Screen1,
          Color:Screen2,
          Image:Screen3,
          ColorCounter:ColorScreen,
          Count:Counter
});

export default createAppContainer(App);
