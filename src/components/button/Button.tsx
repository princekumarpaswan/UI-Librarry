/** @format */

import { View, Button } from "react-native";

interface MyButtonProps {
  text: string;
}

const MyButton: React.FC<MyButtonProps> = ({ text }) => (
  <View>
    <Button title={text} />
  </View>
);

export default MyButton;
