import { AppProvider, Card, Page, BlockStack, Text } from '@shopify/polaris';

function App() {
  return (
    <AppProvider>
      <Page title="Example">
        <Card sectioned>
          <BlockStack>
            <Text as="p">
              Polaris is a design system that helps us build a great experience for all of our merchants.
            </Text>
          </BlockStack>
        </Card>
      </Page>
    </AppProvider>
  );
}

export default App;
