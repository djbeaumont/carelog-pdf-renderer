import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'aliceblue',
    position: 'absolute',
    fontSize: 12,
    top: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
  }
});

export default (props: { children: React.ReactElement }) => (
  <View style={styles.header} fixed>
    {props.children}
  </View>
);
