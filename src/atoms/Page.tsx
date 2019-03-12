import React from "react";
import { StyleSheet, Page } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: "72px"
  }
});

export default (props: { children: React.ReactElement | React.ReactElement[] }) => (
  <Page style={styles.page}>{props.children}</Page>
);