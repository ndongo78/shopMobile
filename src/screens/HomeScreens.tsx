import * as React from 'react';
import {Text,View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { CardItem } from '../components/CardItem';
import { MenuCategories } from '../components/MenuCategories';


const HomeScreens = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  return (
    <View style={tw`flex flex-col  bg-white flex-1`}>
     <View style={tw`ml-3`} >
         <Text style={tw`font-bold text-2xl tracking-wide`}>Femme</Text>
     </View>
      <View style={tw`ml-1`} >
        <MenuCategories setCurrentIndex={setCurrentIndex} />
      </View>
      <View style={tw`mt-4`}>
        {
          currentIndex === 0 && <CardItem />
        }
        {
          currentIndex === 1 && <CardItem />
        }
      </View>
    </View>
  )
}

export default HomeScreens