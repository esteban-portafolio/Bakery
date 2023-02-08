import { StyleSheet, Text, View } from 'react-native';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from './src/navigation/ShopNavigator';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    UnboundedBold: require("./src/assets/fonts/Unbounded-ExtraBold.ttf")
  })

  if (!loaded) {
    return null
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )


}
