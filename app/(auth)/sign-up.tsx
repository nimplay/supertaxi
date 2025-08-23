import CustomButton from "@/components/CustomButton";
import InputField from "@/components/inputField";
import OAuth from "@/components/OAuth";
import { router } from "expo-router";
import { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function SignUpScreen() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = async () => {
    console.log("Sign Up", form);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center bg-white">
        <Image
          source={{
            uri: "https://technical-challenge-nimplay.s3.us-east-2.amazonaws.com/SuperTaxi/closeup-shot-taxi-sign-placed.jpg",
          }}
          className="w-full h-72"
          resizeMode="cover"
        />
      </View>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-tech text-navy my-4">
          Create Account
        </Text>
        <View className="w-full px-4">
          <InputField
            label="Name"
            placeholder="Enter your name"
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
            icon={require("../../assets/images/user.png")}
            secureTextEntry={false}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
            icon={require("../../assets/images/email.png")}
            secureTextEntry={false}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
            icon={require("../../assets/images/password.png")}
            secureTextEntry={true}
          />
          <InputField
            label="Password"
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChangeText={(value) =>
              setForm({ ...form, confirmPassword: value })
            }
            icon={require("../../assets/images/password.png")}
            secureTextEntry={true}
          />
          <View className="w-full px-4 mt-4 flex-1 items-center">
            <CustomButton
              onPress={handleSignUp}
              title={"Sign Up"}
              isIconLeft={false}
              isIconRight={false}
              variant="navy"
            />
          </View>
        </View>
        <OAuth />
        <View className="pb-8">
          <Text className="text-gray-600">
            Already have an account?{" "}
            <Text
              className="text-navy font-tech"
              onPress={() => router.replace("/(auth)/sign-in")}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
