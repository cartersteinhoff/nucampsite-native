import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import { CAMPSITES } from "../shared/campsites";

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: {
      screen: CampsiteInfo,
      options: { headerTitleAlign: "center" },
    },
  },
  {
    initialRouteName: "Directory",
    navigationOptions: {
      headerStyle: {
        backgroundColor: `#5637DD`,
      },
      headerTintColor: `#ffffff`,
      headerTitleStyle: {
        color: "#ffffff",
      },
    },
  }
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <DirectoryNavigator />
      </View>
    );
  }
}

export default Main;
