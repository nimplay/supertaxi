import { View, Text } from "react-native";
import CustomButton from "./CustomButton";

export default function OAuth() {
  const handleGoogleSignIn = async () => {
    console.log("Google Sign Up");
  };
  return (
    <View>
      <View className="w-full flex flex-row items-center justify-center my-4 px-8 gap-2 ">
        <View className="flex1 w-full h-[1px] bg-navy" />
        <Text className="text-navy text-center">Or</Text>
        <View className="flex1 w-full h-[1px] bg-navy " />
      </View>
      <View className="flex-1 items-center mb-8">
        <CustomButton
          onPress={handleGoogleSignIn}
          title={"Log In with Google"}
          isIconLeft={true}
          isIconRight={false}
          variant="google"
        />
      </View>
    </View>
  );
}
