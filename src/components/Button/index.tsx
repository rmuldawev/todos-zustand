import React, {FC} from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface CustomButtonProps {
  buttonText: string;
  onPress: () => void;
  backgroundColor: string;
  textColor?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  buttonText,
  onPress,
  backgroundColor,
  textColor = 'white',
}) => {
  const buttonStyle: StyleProp<ViewStyle> = {
    ...styles.button,
    backgroundColor,
  };

  const textStyle: StyleProp<TextStyle> = {
    ...styles.text,
    color: textColor,
  };
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
