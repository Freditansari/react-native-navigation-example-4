import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import Home from '../Components/Home'
import Friends from '../Components/Friends';
import About from '../Components/About'

const screens ={
    Joe:{
        screen: Home
    },
    Friend: {
        screen:Friends
    },
    About:{
        screen: About
    },

}

const homeStack = createStackNavigator(screens);

export default createAppContainer(homeStack)


