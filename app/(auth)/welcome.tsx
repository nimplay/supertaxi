import CustomButton from "@/components/CustomButton";
import { onBoardingArray } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  const swiperRef = useRef<Swiper>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="flex-1 bg-navy pb-12">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="absolute top-12 right-8 z-10 bg-navy/80 px-4 py-2 rounded-full active:bg-navy-light/50"
      >
        <Text className="text-xm font-bold text-gold active:text-gold-light">
          skip &gt;&gt;
        </Text>
      </TouchableOpacity>

      <View className="flex-1 justify-start">
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={<View className="w-8 h-1 mx-1 bg-gold" />}
          activeDot={<View className="w-8 h-1 mx-1 bg-brown" />}
          onIndexChanged={(index) => setCurrentIndex(index)}
          width={width}
          height={height * 0.8}
        >
          {onBoardingArray.map((item) => (
            <View key={item.id} className="flex-1 bg-navy items-center">
              <Image
                source={{ uri: item.image }}
                className="w-full h-96"
                resizeMode="cover"
              />
              <View className="p-6 items-center">
                <Text className="text-4xl font-exo2 text-sky text-center mb-4">
                  {item.title}
                </Text>
                <Text className="text-xl font-tech text-gold text-center mb-6">
                  {item.description}
                </Text>
              </View>
              <CustomButton
                onPress={() => console.log("Pressed")}
                title={item.button}
                isIconLeft={false}
                isIconRight={true}
                variant="gold"
              />
            </View>
          ))}
        </Swiper>
      </View>
    </View>
  );
}
