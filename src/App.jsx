import {
  AppProvider,
  Page,
  Layout,
  Bleed,
  BlockStack,
  Card,
  Grid,
  Text
} from '@shopify/polaris';
import '../node_modules/@shopify/polaris/build/esm/styles.css';
import './rtl.css';

function App() {
  return (
    <AppProvider i18n={{
      Polaris: {
        ResourceList: {
          sortingLabel: 'مرتب سازی',
          defaultItemSingular: 'مورد',
          defaultItemPlural: 'موارد',
          // Add more translations as needed
        },
        Common: {
          cancel: 'لغو',
          reset: 'بازنشانی',
          // Add more translations as needed
        },
      },
    }}>
      <Page title="مثال">
        <Layout>
          <Layout.Section>
            <BlockStack spacing="loose">
              <Card title="کارت با زیربخش">
                <Card.Section>
                  <Text as="p">این یک زیربخش است.</Text>
                </Card.Section>
              </Card>
            </BlockStack>
          </Layout.Section>
          <Layout.Section>
            <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
              <Card>
                <Text as="p">آیتم 1</Text>
              </Card>
              <Card>
                <Text as="p">آیتم 2</Text>
              </Card>
              <Card>
                <Text as="p">آیتم 3</Text>
              </Card>
              <Card>
                <Text as="p">آیتم 4</Text>
              </Card>
            </Grid>
          </Layout.Section>
          <Layout.Section>
            <Bleed margin="none">
              <Text as="p">محتوای بیرونی</Text>
            </Bleed>
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
}

export default App;
