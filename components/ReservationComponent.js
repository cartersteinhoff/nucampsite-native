import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Picker,
  Switch,
  Button,
} from "react-native";
import DatePicker from "react-native-datepicker";

class Reservation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      campers: 1,
      hikeIn: false,
      date: "",
    };
  }

  static navigationOptions = {
    title: "Reserve Campsite",
  };

  handleReservation() {
    console.log(JSON.stringify(this.state));
    this.setState({
      campers: 1,
      hikeIn: false,
      date: "",
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Number of Campers</Text>
          <Picker
            style={styles.formItem}
            selectedValue={this.state.campers}
            onValueChange={(itemValue) => this.setState({ campers: itemValue })}
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Hike-In?</Text>
          <Switch
            style={styles.formItem}
            value={this.state.hikeIn}
            trackColor={{ true: "#5637DD", false: null }}
            onValueChange={(value) => this.setState({ hikeIn: value })}
          ></Switch>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date</Text>
          <DatePicker
            style={{ flex: 2, marginRight: 20 }}
            date={this.state.date}
            format="YYYY-MM-DD"
            mode="date"
            placeholder="Select Date"
            minDate={new Date().toISOString()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              this.setState({ date: date });
            }}
          />
        </View>
        <View style={styles.formRow}>
          <Button
            onPress={() => this.handleReservation()}
            title="Search"
            color="#5637DD"
            accessibilityLabel="Tap me to search for available campsites to reserve"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
});

export default Reservation;
