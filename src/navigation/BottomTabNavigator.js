import { StyleSheet, Text, View } from "react-native";

import CartNavigator from "./CartNavigator";
import Ionicons from "@expo/vector-icons/Ionicons"
import OrdersNavigator from "./OrdersNavigator";
import ShopNavigator from "./ShopNavigator"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator initialRouteName="ShopTab" screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}>
            <BottomTabs.Screen name="ShopTab" component={ShopNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.icon}>
                            <Ionicons name="home" size={20} color={"black"} />
                            <Text>Tienda</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen name="CartTab" component={CartNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.icon}>
                            <Ionicons name="cart" size={20} color={"black"} />
                            <Text>Carrito</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen name="OrdersTab" component={OrdersNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.icon}>
                            <Ionicons name="list" size={20} color={"black"} />
                            <Text>Ordenes</Text>
                        </View>
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: .5,
        shadowRadius: 5,
        elevation: 5,
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        borderRadius: 25,
        height: 80,
    },
    icon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});