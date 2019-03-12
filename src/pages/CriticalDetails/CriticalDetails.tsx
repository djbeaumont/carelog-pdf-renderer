import * as React from 'react';
import {
  View,
  Document,
} from '@react-pdf/renderer';

import Text from '../../atoms/Text';
import Header from '../../atoms/Header';
import Footer from './Footer';
import Page from '../../atoms/Page';
import H1 from '../../atoms/H1';

type Props = {};

const CriticalDetails: React.FunctionComponent<Props> = () => (
  <Document>
    <Page>
      <Header>
        <Text>This text is in the header</Text>
      </Header>
      <View>
        <H1>Title</H1>
        <Text>Hello, world</Text>
      </View>
      <Footer />
    </Page>
  </Document>
);

export default CriticalDetails;
