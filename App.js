import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Button,
  TextInput,
  Card,
  Avatar,
  Checkbox,
  RadioButton,
  List,
  MD3Colors,
  Menu,
  Divider,
} from "react-native-paper";

export default function App() {
  //const LeftContent = (props) => <Avatar.Icon {...props} icon="alien" />;

  //useState for the checkbox and state .
  // const [checked, setChecked] = React.useState(false);
  // const [checkedRadio, setCheckedRadio] = React.useState("first");

  //stated for the menu
  // const [visible, setVisible] = React.useState(false);
  // const openMenu = () => setVisible(true);
  // const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      {/* view wrapper for the menu implementation. */}

      <View style={styles.container}>
        <Text>React-Native-Page POC on Expo!</Text>
        <Text>stable test!</Text>
      </View>
      <ScrollView>
        <View>
          <Button icon="alien"></Button>
          <Button icon="triforce"></Button>
          <Button icon="cheese"></Button>
          <Button icon="bacteria"></Button>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
