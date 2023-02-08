import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import { PRODUCTS } from "../data/products";
import ProductsItem from "../components/ProductsItem";
import React from "react";

const ProductsScreen = ({ navigation, route }) => {

  const newProducts = PRODUCTS.filter(
    product => product.category === route.params.categoryId
  )

  const handleSelectedProducts = item => {
    navigation.navigate("Details", {
      name: item.name,
    })
  }

  const renderProductsItem = ({ item }) => (
    <ProductsItem item={item} onSelected={handleSelectedProducts} />
  )

  return (
    <FlatList
      data={newProducts}
      renderItem={renderProductsItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  )
}

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productsContainer: {
    height: 150,
    width: 150,
  },
});
