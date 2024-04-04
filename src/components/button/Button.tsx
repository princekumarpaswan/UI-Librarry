/** @format */

import { View, Button } from "react-native";

interface MyButtonProps {
  text: string;
}

const MyButton: React.FC<MyButtonProps> = ({ text }) => (
  <View style={{ backgroundColor: "green", height: 200, width: 200 }}>
    <Button title={text} />
  </View>
);

export default MyButton;
