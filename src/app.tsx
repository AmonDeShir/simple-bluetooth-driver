import React from "react";
import { ThemeProvider } from "@emotion/react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { Auth } from "./pages/auth/auth";
import { Navigation } from "./pages/navigation";
import { store } from "./store/store";
import { darkTheme } from "./themes/dark.theme";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
          <SafeAreaView>
            <StatusBar barStyle='light-content' />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <Navigation />
            </ScrollView>
          </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
