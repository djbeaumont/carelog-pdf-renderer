import React from "react";
import { StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'cornsilk',
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
  }
});

export default (props: { children: React.ReactElement }) => (
  <View style={styles.footer} fixed>
    {props.children}
  </View>
);
