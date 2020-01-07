import React from 'react'
import { View, Text } from 'react-native'

import HomeStack from './HomeStack'
import AboutStack from './AboutStack'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import FriendStack from './FriendStack'

const DrawerNav = createDrawerNavigator({
    Joe:{
        screen: HomeStack,
    },
    About:{
        screen: AboutStack
    },
    Friend:{
        screen: FriendStack
    }
})

export default createAppContainer(DrawerNav)
