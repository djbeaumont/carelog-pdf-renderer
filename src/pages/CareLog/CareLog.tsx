import * as React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

// import Page from '../../atoms/Page';
import { Visit } from '../../types/Visit';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

export type Props = {
  visits: Visit[];
}

const CareLog: React.FunctionComponent<Props> = ({ visits }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
      {visits.map(visit => (
        <View key={visit.id}>
          <Text>{visit.care_recipient.firstname} {visit.care_recipient.lastname}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default CareLog;
