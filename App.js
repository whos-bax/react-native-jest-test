import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Profile from "./src/Profile";

const App = () => {
  return (
      <View style={styles.container}>
        <Profile userName={"who"} name={"호상박"} />
      </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
