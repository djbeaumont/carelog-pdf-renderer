import React from 'react';
import { StyleSheet, View } from "@react-pdf/renderer";
import Footer from '../../atoms/Footer';
import Text from '../../atoms/Text';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {

  },
  center: {

  },
  right: {

  },
})

export default () => (
  <Footer>
    <View style={styles.wrapper}>
      <View style={styles.left}>
        <Text>Left</Text>
      </View>
      <View style={styles.center}>
        <Text>Center</Text>
      </View>
      <View style={styles.right}>
        <Text>Right</Text>
      </View>
    </View>
  </Footer>
);