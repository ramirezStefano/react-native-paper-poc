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
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      {/* view wrapper for the menu implementation. */}
      <View
        style={{ padding: 50, flexDirection: "row", justifyContent: "center" }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button icon="cheese" onPress={openMenu}>
              Show Cool Menu
            </Button>
          }
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
      <View style={styles.container}>
        <Text>React-Native-Page POC on Expo!</Text>
        <Text>stable test!</Text>
      </View>
      <ScrollView>
        <View>
          <Button
            mode="contained"
            icon="alien"
            onPress={() => console.log("Pressed Alien")}
          ></Button>
          <Button
            mode="contained"
            icon="triforce"
            onPress={() => console.log("You found the Triforce!")}
          ></Button>
          <Button
            mode="elevated"
            icon="cheese"
            onPress={() => console.log("Have some Cheese! ")}
          ></Button>
          <Button
            mode="outlined"
            icon="bacteria"
            onPress={() => console.log("This is NOT a bug!")}
          ></Button>
          {/* for rendering testing */}
          <Button mode="text" icon="alien"></Button>
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
