import { AppProvider, Card, Page, BlockStack, Text } from "@shopify/polaris";
import "../node_modules/@shopify/polaris/build/esm/styles.css";

function App() {
  return (
    <AppProvider
      i18n={{
        Polaris: {
          ResourceList: {
            sortingLabel: "مرتب سازی",
            defaultItemSingular: "مورد",
            defaultItemPlural: "موارد",
          },
          Common: {
            cancel: "لغو",
            reset: "بازنشانی",
          },
        },
      }}
    >
      <Page title="مثال خوب">
        <Card sectioned>
          <BlockStack>
            <Text as="p">شاپیفای پولاریس جالبه!</Text>
          </BlockStack>
        </Card>
      </Page>
    </AppProvider>
  );
}

function CardWithSubsection() {
  return (
    <Card roundedAbove="sm">
      <BlockStack gap="400">
        <BlockStack gap="200">
          <Text as="h2" variant="headingSm">
            Customer
          </Text>
          <Text as="p" variant="bodyMd">
            John Smith
          </Text>
        </BlockStack>
        <div>
          <BlockStack gap="200">
            <Text as="h3" variant="headingSm" fontWeight="medium">
              Addresses
            </Text>
            <div>
              <Text as="p" variant="bodyMd">
                123 First St
              </Text>
              <Text as="p" variant="bodyMd">
                Somewhere
              </Text>
              <Text as="p" variant="bodyMd">
                The Universe
              </Text>
            </div>
            <div>
              <Text as="p" variant="bodyMd">
                123 Second St
              </Text>
              <Text as="p" variant="bodyMd">
                Somewhere
              </Text>
              <Text as="p" variant="bodyMd">
                The Universe
              </Text>
            </div>
          </BlockStack>
        </div>
        <div>
          <Text as="p" variant="bodyMd">
            A single subsection without a sibling has no visual appearance
          </Text>
        </div>
      </BlockStack>
    </Card>
  );
}

export default App;
