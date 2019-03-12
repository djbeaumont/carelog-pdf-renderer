import React from "react";
import { StyleSheet, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  text: {
    marginTop: '10px',
    marginBottom: '20px',
    fontSize: '18pt'
  }
});

export default (props: { children: string }) => (
  <Text style={styles.text}>{props.children}</Text>
);
