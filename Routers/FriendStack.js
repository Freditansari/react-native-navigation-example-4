import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';

import Friends from '../Components/Friends';

const screens ={

    Friend: {
        screen:Friends
    },

}

const FriendStack = createStackNavigator(screens);

export default createAppContainer(FriendStack)