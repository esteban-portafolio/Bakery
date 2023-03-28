import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { addItem } from "../store/actions/cart.action";

const DetailsScreen = ({navigation, route}) => {
  const dispatch = useDispatch()
  const bread = useSelector(state => state.products.selected)


  const handleAddItem = () => {
    dispatch(addItem(bread))
  }
  
  return (
    <View style={styles.container}>
      <Text>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Button title="Agregar al Carrito" onPress={handleAddItem}/>
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
