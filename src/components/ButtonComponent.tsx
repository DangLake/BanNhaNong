// src/components/ButtonComponent.js
import React from 'react';
import TextComponent from './TextComponent';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary'|'text'|'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?:StyleProp<TextStyle>;
  onPress?:()=>void;
  iconFlex?: 'right'|'left';

}
const ButtonComponent = (props:Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {icon,text,type,color,styles,textColor,textStyles,onPress,iconFlex} = props;
return <TouchableOpacity styles={[globalStyles.button,{}, styles]} >
{icon && icon}
  <TextComponent text={text} color={textColor} styles={textStyles} />
  {icon && iconFlex === 'right' && icon}
</TouchableOpacity>;
};

export default ButtonComponent;
