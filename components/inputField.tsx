import {
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";

interface CustomInputProps {
  onChangeText: (value: any) => void;
  label: string;
  secureTextEntry: boolean;
  placeholder: string;
  icon: ImageSourcePropType;
  value: string;
}

export default function InputField({
  onChangeText,
  value,
  label,
  placeholder = "Enter text",
  icon,
  secureTextEntry = false,
}: CustomInputProps) {
  return (
    <View className="mb-4">
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback>
          <View>
            <View>
              <Text>{label}</Text>
            </View>
            <View className="flex flex-row items-center gap-1 border py-2 border-gray-300">
              <Image
                source={icon}
                className="ml-4"
                style={{ width: 20, height: 20 }}
              />
              <TextInput placeholder={placeholder} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}
