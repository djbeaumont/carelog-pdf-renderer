import * as React from 'react';
import {
  Page,
  Text,
  View,
  Document,
} from '@react-pdf/renderer';

type Props = {};

const CriticalDetails: React.FunctionComponent<Props> = () => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Hello, world</Text>
      </View>
    </Page>
  </Document>
);

export default CriticalDetails;
