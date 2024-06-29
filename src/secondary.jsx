import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider, Page, Card, Text } from '@shopify/polaris';
import '../node_modules/@shopify/polaris/build/esm/styles.css';
import './index.css'

function SecondaryApp() {
  return (
    <AppProvider>
      <Page title="صفحه دوم">
        <Card sectioned>
          <Text as="p">این یک صفحه دوم است.</Text>
        </Card>
      </Page>
    </AppProvider>
  );
}

ReactDOM.render(<SecondaryApp />, document.getElementById('root-secondary'));
