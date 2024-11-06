import {View, ScrollView} from 'react-native';
import React, {ReactNode} from 'react';

interface Props {
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
}
const ContainerComponent = (props: Props) => {
  const {isScroll, title, children} = props;

  const returnContainer = isScroll ? (
    <ScrollView>{children}</ScrollView>
  ) : (
    <View>{children}</View>
  );
  return (
    <View>
      {returnContainer}
    </View>
  );
};

export default ContainerComponent;
