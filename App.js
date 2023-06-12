import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  BottomNavigation,
  Text,
} from "react-native-paper";

const MapRoute = () => <Text>Map</Text>;

const AdsRoute = () => <Text>Ads</Text>;

const LeadsRoute = () => <Text>Leads</Text>;

const BudgetRoute = () => <Text>Budget</Text>;

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "Map",
      title: "Map",
      focusedIcon: "map-check",
      unfocusedIcon: "map",
    },
    {
      key: "Ads",
      title: "Ads",
      focusedIcon: "map-marker-star",
      unfocusedIcon: "map-marker-star-outline",
    },
    {
      key: "Leads",
      title: "Leads",
      focusedIcon: "phone-ring",
      unfocusedIcon: "phone-ring-outline",
      badge: 5,
    },
    {
      key: "Budget",
      title: "Budget",
      focusedIcon: "finance",
      unfocusedIcon: "finance",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Map: MapRoute,
    Ads: AdsRoute,
    Leads: LeadsRoute,
    Budget: BudgetRoute,
  });

  return (
    <PaperProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
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
