import {
    createAppContainer,
    createSwitchNavigator,
} from "react-navigation";

import { createStackNavigator } from 'react-navigation-stack';
import LoginContainer from '../container/LoginContainer'
import DashboardContainer from '../container/DashboardContainer'

const Dashboard = createStackNavigator(
    {
        Dashboard:{
            screen:DashboardContainer
        }
        
    }
)

const AppNavigation = createSwitchNavigator(
    {
        LoginScreen: {
            screen: LoginContainer
        },
        Dashboard : Dashboard
    },
    {
        initialRouteName: 'LoginScreen',
    }
);

export default (AppContainer = createAppContainer(AppNavigation));
