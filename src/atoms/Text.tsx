import React from "react";
import { StyleSheet, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  text: {
    fontSize: "11pt"
  }
});

export default (props: { children: string }) => (
  <Text style={styles.text}>{props.children}</Text>
);
