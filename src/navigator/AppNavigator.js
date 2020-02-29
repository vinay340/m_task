import {
    createAppContainer,
    createSwitchNavigator,
} from "react-navigation";

import LoginContainer from '../container/LoginContainer'


const AppNavigation = createSwitchNavigator(
    {
        LoginScreen: {
            screen: LoginContainer
        },
    },
    {
        initialRouteName: 'LoginScreen',
    }
);

export default (AppContainer = createAppContainer(AppNavigation));
