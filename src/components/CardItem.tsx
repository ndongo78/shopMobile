import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Backs } from "../constants";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

export const CardItem = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={tw`flex flex-row flex-wrap items-center justify-center`}>
        {Backs.map((item, index) => (
          <TouchableOpacity
            style={[tw`m-2  bg-gray-50 shadow-md mb-4 rounded-md`, { width: width / 2.3 }]}
            key={item.id}
            onPress={() => navigation.navigate("Detail", { item })}
          >
            <View
              style={[
                {
                  backgroundColor: item.color,
                  alignItems: "center",
                  justifyContent: "center",
                  height:200,
                },
                tw`rounded-3xl`,
              ]}
            >
              <Image
                source={item.image}
                height={100}
                width={100}
                resizeMode="contain"
              />
            </View>
            <View style={[tw`p-2`]}>
              <Text style={[tw`font-medium text-xl p-1`]}>{item.title}</Text>
              <Text style={[tw`font-medium text-xl p-1 `]}>{item.price}€</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
