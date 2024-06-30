import {
    Page,
    Layout,
    Banner,
    LegacyCard,
    FormLayout,
    TextField,
  } from '@shopify/polaris';
  import '../node_modules/@shopify/polaris/build/esm/styles.css';
  import './secondex.css'
  import React from 'react';
  import ReactDOM from 'react-dom';


  function LayoutExample() {
    return (
      <Page fullWidth>
        <Layout>
          <Layout.Section>
            <Banner title="Order archived" onDismiss={() => {}}>
              <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
            </Banner>
          </Layout.Section>
          <Layout.AnnotatedSection
            id="storeDetails"
            title="Store details"
            description="Shopify and your customers will use this information to contact you."
          >
            <LegacyCard sectioned>
              <FormLayout>
                <TextField
                  label="Store name"
                  onChange={() => {}}
                  autoComplete="off"
                />
                <TextField
                  type="email"
                  label="Account email"
                  onChange={() => {}}
                  autoComplete="email"
                />
              </FormLayout>
            </LegacyCard>
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }

ReactDOM.render(<SecondaryApp />, document.getElementById('root-secondary'));
