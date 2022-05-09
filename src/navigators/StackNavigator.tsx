import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeScreens from "../screens/HomeScreens";
import Icons from "react-native-vector-icons/AntDesign";
import tw from "tailwind-react-native-classnames";
import DetailScreen from "../screens/DetailScreen";

const Stack = createStackNavigator();

export const RightHeader = () => (
  <View style={tw`flex flex-row mr-5 justify-around`}>
    <TouchableOpacity
      onPress={() => alert("Search")}
      style={tw`mr-3`}
    >
      <Icons name="search1" size={30} style={tw`text-gray-500`} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => alert("Cart")}>
      <Icons
        name="shoppingcart"
        size={30}
        style={tw`text-gray-500`}
      />
    </TouchableOpacity>
  </View>
)

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
          height: 120,
          elevation: 0,
          borderBottomWidth: 0,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreens}
        options={{
          headerRight: () => <RightHeader />,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        // options={{
        //   headerRight: () => <RightHeader />,
        //   headerTitle: "",
        // }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
