import React,{useLayoutEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View ,Dimensions, ImageSourcePropType, Image} from 'react-native'
import { useNavigation ,useRoute } from '@react-navigation/native';
import Icons from "react-native-vector-icons/AntDesign";
import tw from 'tailwind-react-native-classnames';
import Material from "react-native-vector-icons/MaterialIcons";

const { width ,height } = Dimensions.get('window');

const RightHeader = () => (
    <View style={tw`flex flex-row mr-5 justify-around`}>
      <TouchableOpacity
        onPress={() => alert("Search")}
        style={tw`mr-3`}
      >
        <Icons name="search1" size={30} style={tw`text-gray-100`} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("Cart")}>
        <Icons
          name="shoppingcart"
          size={30}
          style={tw`text-gray-100`}
        />
      </TouchableOpacity>
    </View>
  )

const DetailScreen = () => {
 const navigation = useNavigation();
 const route = useRoute();
    const {item} = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => RightHeader(),
            headerTitle: "",
            headerStyle: {
                backgroundColor: item.color,
                height: 120,
                elevation: 0,
                borderBottomWidth: 0,
                shadowColor: 'transparent',
            },
           headerLeft: () => (
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={tw`mr-3`}
               >
                <Icons name="arrowleft" size={30} style={tw`text-gray-100`} />
            </TouchableOpacity>
              ),
        });
    }, [navigation]);
  return (
    <View style={[tw`flex-1`,{backgroundColor:item.color}]}>
      <View style={[tw`flex-1 m-2`]}>
        <Text style={tw`text-sm text-white`} >Sac artisanal</Text>
        <Text style={tw`text-3xl text-white font-medium`} >{item.title}</Text>
         <View style={[tw`flex flex-col justify-start mt-10`,{marginBottom:10}]}>
            <Text style={tw`text-sm text-white`} >Price</Text>
            <Text style={tw`text-3xl text-white font-medium mt-1`} >{item.price}€</Text>
         </View>
      </View>
        <View style={[tw`bg-white relative`,{height:height /1.7,borderTopLeftRadius:50,borderTopRightRadius:50}]}>
          <Image 
          source={item.image} 
          style={{
            position: 'absolute', 
            top: height /1.7 /4 - height /1.7 /2,
            right: 20,
          }}
           width={220} height={250}
            resizeMode="contain"
           />
           <View style={[tw`flex  flex-row justify-between`,{marginTop:100}]}>
            <View style={tw`mx-3 `}>
            <Text style={tw`text-lg font-semibold text-gray-600`} >Colors</Text>
            <View style={tw`flex flex-row`}>
            <TouchableOpacity style={[tw` w-5 h-5 rounded-3xl m-2`,{backgroundColor:"peru"}]}>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-red-500 w-5 h-5 rounded-3xl m-2`}>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-green-500 w-5 h-5 rounded-3xl m-2`}>
            </TouchableOpacity>
            </View>
            </View> 
            <View style={tw`flex justify-center mr-20`}>
            <Text style={tw`text-lg font-semibold text-gray-600`} >Size</Text>
            <Text style={tw`text-sm text-gray-900 text-lg`} >12cm</Text>
            </View>
            <View> 
            </View>
           </View>
            <View style={tw`m-2 justify-center`}>
              <Text>
               Lorem ipsum dolor sit ame t consectetur adipisicing elit. Natus, laborum consequatur et veniam dicta, adipisci libero officia aliquid enim fuga quae velit necessitatibus facilis voluptate laudantium dolorem harum, possimus animi!
                Voluptatibus nesciunt nemo autem obcaecati aliquam laborum dignissimos facilis accusamus architecto expedita adipisci id reiciendis assumenda sapiente totam labore quae quidem sunt, eligendi repudiandae voluptate? Temporibus cum dolorem libero aspernatur?
              </Text>
              </View>
              <View style={tw`flex-row justify-between`}>
              <View style={tw`flex flex-row m-3`}>
              <TouchableOpacity style={tw`rounded-3xl border mr-1 w-8 h-8 bg-gray-200 items-center text-center`}>
                <Text style={tw`text-xl font-bold`}>-</Text>
              </TouchableOpacity>
              <Text style={tw`text-center font-bold text-2xl mr-1 ml-1`}>1</Text>
              <TouchableOpacity style={tw`rounded-3xl border ml-1 w-8 h-8 bg-gray-200 items-center text-center`}>
                <Text style={tw`text-xl font-bold`}>+</Text>
              </TouchableOpacity>
              </View>
              <View style={tw``}>
              <TouchableOpacity style={tw`text-center`}>
                <Icons name="hearto" size={30} style={tw`m-3 mr-5`} />
              </TouchableOpacity>
              </View>
              </View>
              <View style={tw`flex-row justify-between items-center mt-4`}>
              <TouchableOpacity style={tw`rounded-full m-2 border border-indigo-900 w-2/12 items-center`}>
                <Material name="add-shopping-cart" size={30} style={tw`p-2 text-indigo-600`} />
              </TouchableOpacity>
              <TouchableOpacity style={tw`bg-blue-600 flex items-center rounded-full w-9/12 h-14 m-2 `}>
                <Text style={tw`text-white mt-2 font-medium text-2xl`}>Acheté maintenant</Text>
              </TouchableOpacity>
              </View>
        </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})