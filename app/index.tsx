import { Text, View } from "react-native";
import "./styles/home.css";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <Text>home screen</Text>
    </View>
  );
}
