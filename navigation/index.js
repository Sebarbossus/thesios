import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import StudentDashboard from "../screens/student/StudentDashboard";
import ProfDashboard from "../screens/teacher/ProfDashboard";
import SearchMask from "../screens/student/SearchMask";
import SearchDetail from "../screens/student/SearchDetail";
import Profs from "../screens/student/Profs";
import ProfDetail from "../screens/student/ProfDetail";
import ProfPapers from "../screens/teacher/ProfPapers";
import Interests from "../screens/teacher/Interests";
import SecondReviewer from "../screens/teacher/SecondReviewer";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    SignUp,
    Login,
    StudentDashboard,
    ProfDashboard,
    SearchMask,
    SearchDetail,
    Profs,
    ProfDetail,
    Interests,
    ProfPapers,
    SecondReviewer
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