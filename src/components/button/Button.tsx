/** @format */

import { View, Button } from "react-native";

interface MyButtonProps {
  text: string;
}

const MyButton: React.FC<MyButtonProps> = ({ text }) => (
  <View style={{ backgroundColor: "red" }}>
    <Button title={text} />
  </View>
);

export default MyButton;
