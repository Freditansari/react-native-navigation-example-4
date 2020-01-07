import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';

import About from '../Components/About';

const screens ={
    About:{
        screen: About
    },


}

const AboutStack = createStackNavigator(screens);

export default createAppContainer(AboutStack)
