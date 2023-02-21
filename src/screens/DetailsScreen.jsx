import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";
import { useSelector } from "react-redux";

const DetailsScreen = ({navigation, route}) => {
  const bread = useSelector(state => state.products.selected)
  
  return (
    <View style={styles.container}>
      <Text>{route.params.name}</Text>
      <Button title="Go to Categories" 
      onPress={()=> navigation.popToTop()}/>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
