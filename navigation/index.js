import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import StudentDashboard from "../screens/student/StudentDashboard";
import ProfDashboard from "../screens/teacher/ProfDashboard";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    SignUp,
    Login,
    StudentDashboard,
    ProfDashboard,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 5,
        backgroundColor: theme.colors.white,
        borderBottomColor: "transparent",
        elevation: 0 // Android-only
      },
      headerBackImage: () => <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screens);