import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CategoriesItem from "../components/CategoriesItem";
import React from "react";
import { selectedCategory } from "../store/actions/category.action";

const CategoriesScreen = ({ navigation }) => {

  const categories = useSelector((state) => state.categories.categories)
  const dispatch = useDispatch()

  const handleSelectedCategories = item => {
    dispatch(selectedCategory(item.id))
    navigation.navigate("Products", {
      //categoryId: item.id,
      title: item.title,
    })
  }

  const renderCategoriesItem = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategories} />
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
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
