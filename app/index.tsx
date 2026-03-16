import { Text, View, Pressable } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Index() {
  return (
    <View>
      /* Gear shifting */
      <View className='rotate-90'>
        <Pressable>
          <Text>D</Text>
        </Pressable>
      <View>
        <Pressable>
          <Text>N</Text>
        </Pressable>
      <View>
        <Pressable>
          <Text>R</Text>
        </Pressable>
      </View>
      /* Brake Pedal */
      <View className='rotate-90'>
        <Pressable>
          <Text>Pedal</Text>
        </Pressable>
        <Pressable>
          <Text>Brake</Text>
        </Pressable>
      </View>
      /* Direction */
      <View>
        <Pressable>
          <FontAwesome name="arrow-up" size={24} color="black" />
        </Pressable>
      <View>
        <Pressable>
          <FontAwesome name="arrow-down" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
}
