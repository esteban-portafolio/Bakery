import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import { CATEGORIES } from "../data/categories";
import CategoriesItem from "../components/CategoriesItem";
import React from "react";

const CategoriesScreen = ({ navigation }) => {

  const handleSelectedCategories = item => {
    navigation.navigate("Products", {
      categoryId: item.id,
      title: item.title,
    })
  }

  const renderCategoriesItem = ({item}) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategories} />
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
      data={CATEGORIES}
      renderItem={renderCategoriesItem}
      keyExtractor={item => item.id}
      />      
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
});
