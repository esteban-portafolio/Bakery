import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const ProductsItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onSelected(item)}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text>${item.price}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default ProductsItem

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderRadius: 1,
        padding: 10,
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 2,
        height: 260,
    },
    imageContainer: {
        height: "60%"
    },
    textContainer: {
        height: "40%"
    },
    image: {
        height: "100%",
        width: "100%",
    },
})