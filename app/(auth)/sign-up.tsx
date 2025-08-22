import InputField from "@/components/inputField";
import { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function SignUpScreen() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center bg-white">
        <Image
          source={{
            uri: "https://technical-challenge-nimplay.s3.us-east-2.amazonaws.com/SuperTaxi/closeup-shot-taxi-sign-placed.jpg",
          }}
          className="w-full h-80"
          resizeMode="cover"
        />
      </View>
      <View className="flex-1 items-center justify-center bg-white">
        {/*  <Image
          source={require("../../assets/images/taxi.png")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        /> */}
        <Text className="text-lg text-gray-600">
          Please sign up to continue
        </Text>
        <View className="w-full px-4">
          <InputField
            label="Name"
            placeholder="Enter your name"
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
            icon={require("../../assets/images/taxi.png")}
            secureTextEntry={false}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
            icon={require("../../assets/images/taxi.png")}
            secureTextEntry={false}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
            icon={require("../../assets/images/taxi.png")}
            secureTextEntry={true}
          />
        </View>
      </View>
    </ScrollView>
  );
}
