import CustomButton from "@/components/CustomButton";
import { onBoardingArray } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function WelcomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const progress = useSharedValue(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(newIndex);

    // Update animated value for dot indicators
    progress.value = withSpring(newIndex / (onBoardingArray.length - 1));
  };

  const handleButtonPress = () => {
    if (currentIndex === onBoardingArray.length - 1) {
      router.replace("/(auth)/sign-up");
    } else {
      const nextIndex = currentIndex + 1;
      scrollViewRef.current?.scrollTo({
        x: nextIndex * width,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }
  };

  const AnimatedDot = ({ index }: { index: number }) => {
    const animatedStyle = useAnimatedStyle(() => {
      const isActive = index === currentIndex;
      return {
        width: isActive ? 24 : 8,
        height: 8,
        backgroundColor: isActive ? "#B8860B" : "#DAA520",
        marginHorizontal: 4,
        borderRadius: 4,
      };
    });

    return <Animated.View style={animatedStyle} />;
  };

  return (
    <View className="flex-1 bg-navy pb-16">
      <View className="h-10 bg-black w-full" />
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-in")}
        className="absolute top-16 right-8 z-10 bg-navy/80 px-4 py-2 rounded-full active:bg-navy-light/50"
      >
        <Text className="text-xm font-bold text-gold active:text-gold-light">
          skip &gt;&gt;
        </Text>
      </TouchableOpacity>

      <View className="flex-1 justify-start">
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {onBoardingArray.map((item) => (
            <View
              key={item.id}
              style={{ width }}
              className="flex-1 bg-navy items-center"
            >
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
                onPress={handleButtonPress}
                title={item.button}
                isIconLeft={false}
                isIconRight={true}
                variant="gold"
              />
            </View>
          ))}
        </ScrollView>

        {/* Custom dot indicators */}
        <View className="flex-row justify-center mt-6">
          {onBoardingArray.map((_, index) => (
            <AnimatedDot key={index} index={index} />
          ))}
        </View>
      </View>
    </View>
  );
}
