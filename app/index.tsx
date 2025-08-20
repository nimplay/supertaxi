import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <Image
        source={{
          uri: "https://technical-challenge-nimplay.s3.us-east-2.amazonaws.com/SuperTaxi/good-looking-business-woman-texting-message-while-walking-street.jpg",
        }}
        className="h-96 w-full object-cover "
      />
      <View className="flex items-center justify-center bg-navy">
        <Text className="text-4xl font-exo2 text-sky">Super Taxi!</Text>
        <Text className="text-xl font-tech text-gold">
          This is a Tailwind CSS example
        </Text>
      </View>
    </SafeAreaView>
  );
}
