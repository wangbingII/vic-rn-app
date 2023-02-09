import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { Flex, Text } from "@components/index";
import { theme } from "src/components/Theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Flex>
        <Text color={"background-default"}>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </Flex>
    </NativeBaseProvider>
  );
}
