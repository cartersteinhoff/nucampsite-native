import React, { Component } from "react";
import Home from "./HomeComponent";
import Directory from "./DirectoryComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import { View, Platform } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { CAMPSITES } from "../shared/campsites";
import About from "./AboutComponent";
import Contact from "./ContactComponent";

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

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
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

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
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

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
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

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Directory: { screen: DirectoryNavigator },
    About: { screen: AboutNavigator },
    Contact: { screen: ContactNavigator },
  },
  { drawerBackgroundColor: "#CEC8FF" }
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
        <MainNavigator />
      </View>
    );
  }
}

export default Main;
