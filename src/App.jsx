import { AppProvider, Card, Page, BlockStack, Text } from '@shopify/polaris';
import '../node_modules/@shopify/polaris/build/esm/styles.css';

function App() {
  return (
    <AppProvider>
      <Page title="فروشگاه آنلاین سوغات ایران">
        <Card sectioned>
          <BlockStack>
            <Text as="p">
               به  ۳۰۰ هزار تومان جهت تست این که چه فونتی داره کار میکنه.
            </Text>
          </BlockStack>
        </Card>
      </Page>
    </AppProvider>
  );
}

export default App;
