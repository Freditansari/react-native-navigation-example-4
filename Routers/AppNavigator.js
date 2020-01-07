import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Home from '../Components/Home'
import Friends from '../Components/Friends';

const screens ={
    Home:{
        screen: Home
    },
    Friend: {
        screen:Friends
    },

}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack)
