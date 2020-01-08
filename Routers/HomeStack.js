import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Home from '../Components/Home'
import Friends from '../Components/Friends';
import About from '../Components/About'
import Header from '../Shared/Header';

const screens ={
    // Joe:{
    //     screen: Home
    // },
    Home:{
        screen:Home, 
        navigationOptions: ({navigation}) =>{
            return {
                headerTitle :()=> <Header title="potato banana" navigation ={navigation} />
            }
        }
    },
    Friend: {
        screen:Friends
    },
    About:{
        screen: About
    },

}

const homeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor:'#444',
        headerStyle:{backgroundColor:'#eee'}
    }
});

export default createAppContainer(homeStack)


