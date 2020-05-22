import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { ListItem } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import CampsiteInfo from "./CampsiteInfoComponent";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  static navigationOptions = {
    title: "Directory",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <View>
          <ListItem
            title={item.name}
            subtitle={item.description}
            leftAvatar={{ source: require("./images/react-lake.jpg") }}
            onPress={() => navigate("CampsiteInfo", { campsiteId: item.id })}
          />
        </View>
      );
    };

    return (
      <FlatList
        data={this.state.campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Directory;
