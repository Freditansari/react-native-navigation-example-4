import React from 'react'
import { View, Text } from 'react-native'

import HomeStack from './HomeStack'
import AboutStack from './AboutStack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import FriendStack from './FriendStack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
// https://www.reactnativeschool.com/complex-navigation-example-with-react-navigation



const bottomTab = createBottomTabNavigator({
    Joe:{
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
          },
    },
    About:{
        screen: AboutStack,
        navigationOptions: {
            tabBarLabel: 'About',
          },
    },
    Friend:{
        screen: FriendStack,
        navigationOptions: {
            tabBarLabel: 'Friend',
          },
    }
});

const DrawerNav = createDrawerNavigator({
    // main : bananaStack,
    Home: bottomTab,
    About:{
        screen: AboutStack
    },
    Friend:{
        screen: FriendStack
    },
});

export default createAppContainer(DrawerNav);


// const DrawerNav = createDrawerNavigator({
 
//    Joe:{
//         screen: HomeStack,
//     },
//     About:{
//         screen: AboutStack
//     },
//     Friend:{
//         screen: FriendStack
//     },
    
// })

// const bottomTab = createBottomTabNavigator({
//     Joe:{
//         screen: HomeStack,
//         navigationOptions: {
//             tabBarLabel: 'Joe',
//           },
//     },
//     About:{
//         screen: AboutStack,
//         navigationOptions: {
//             tabBarLabel: 'About',
//           },
//     },
//     Friend:{
//         screen: FriendStack,
//         navigationOptions: {
//             tabBarLabel: 'Friend',
//           },
//     }
// });

// const app = createDrawerNavigator({DrawerNav, bottomTab})

// // const dashboardStack = createDrawerNavigator({
// //     Dashboard : bottomTab
// // })

// // const App=createSwitchNavigator({
// //     Drawer: DrawerNav,
// //     bottomTab: dashboardStack
// // })

// // export default createAppContainer(DrawerNav)
// export default createAppContainer(app)
