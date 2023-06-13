import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Avatar,
  Card,
} from "react-native-paper";

export default function App() {
  const LeftContent = (props) => (
    <Avatar.Image
      {...props}
      size={100}
      style={{
        borderRadius: 8,
        marginLeft: -30,
        borderColor: "transparent",
      }}
      source={{ uri: "https://picsum.photos/700" }} // Replace with your desired image URLr
    />
  );

  return (
    <PaperProvider>
      <Card style={{ padding: 45 }} mode="elevated">
        <Card.Title
          title="Business Name"
          subtitle="Business Address"
          left={LeftContent}
          titleStyle={{
            marginLeft: 40,
            fontWeight: "bold",
            marginTop: -40,
            marginBottom: 2,
          }}
          subtitleStyle={{ marginLeft: 40, opacity: 0.6 }}
        />
      </Card>
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
