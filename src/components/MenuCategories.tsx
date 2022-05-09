import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";

interface MenuCategoriesProps {
  setCurrentIndex: (index: number) => void;
}


export const MenuCategories = ({setCurrentIndex}:MenuCategoriesProps) => {
  const categories: string[] = [
    "Sace à main",
    "Chaussures",
    "Bijoux",
    "Accessoires",
  ];
  const [selectedIndex, setSelectedIndex] = React.useState(0);


  return (
    <View style={tw`mt-4 `}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={tw``}
            onPress={() => {
              setSelectedIndex(index);
              setCurrentIndex(index)
            }
          }
          >
            <Text
              style={[
                tw`font-bold text-2xl p-2 tracking-wide`,
                { color: selectedIndex == index ? "#292828" : "#878484" },
              ]}
            >
              {item}
            </Text>
            <View
              style={{
                height: 2,
                width: 70,
                marginLeft: 15,
                backgroundColor:
                  selectedIndex === index ? "#472cf4" : "transparent",
              }}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* line bottom */}
    </View>
  );
};

const styles = StyleSheet.create({});
function setCurrentIndex(index: number) {
  throw new Error("Function not implemented.");
}

