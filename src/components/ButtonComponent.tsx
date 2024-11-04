// src/components/ButtonComponent.js
import React from 'react';
import TextComponent from './TextComponent';

import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/globalStyles';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
  icon?: React.ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';

}
const ButtonComponent = (props: Props) => {

  const { icon, text, type, color, styles, textColor, textStyles, onPress, iconFlex } = props;
  return (
    (type === 'primary' ? (
      <TouchableOpacity
        onPress= { onPress }
        style = {[
          globalStyles.button,
    { backgroundColor: color ?? appColors.primary },
    styles]}
    >
    { icon && icon}
    <TextComponent
      text={ text }
      color = { textColor ?? appColors.white}
      font = { fontFamilies.semiBold }
      styles = { [textStyles, { marginLeft: icon ? 12 : 0 }]}
      flex = { icon && iconFlex === 'right' ? 1 : 0}
    />
    { icon && iconFlex === 'right' && icon }
    </TouchableOpacity>
    ) : (
      <TouchableOpacity>
        <TextComponent text={text} color={type === 'link' ? appColors.link : appColors.text}/>
      </TouchableOpacity>
    ))
  );
};

export default ButtonComponent;
