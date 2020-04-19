import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ChoiceLogin from "./pages/Login/ChoiceLogin";
import LoginUser from "./pages/Login/LoginUser";
import LoginOng from "./pages/Login/LoginOng";

import FormUser from "./pages/Form/FormUser";
import FormOng from "./pages/Form/FormOng";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login: createStackNavigator(
      {
        ChoiceLogin,
        LoginUser,
        LoginOng,
        FormUser,
        FormOng,
      },
      {
        defaultNavigationOptions: {
          headerLeft: false
        },
      }
    ),
  })
);

export default Routes;
