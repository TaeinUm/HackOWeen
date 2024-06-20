import {TouchableOpacity} from "react-native";
import React from "react";
import styled from "styled-components/native";
import {Pressable} from "native-base";

export default function CreateNewThreadButton(props) {
  const onPress = props.onPress? props.onPress : () => {};

  return (
    <TouchableOpacity onPress={onPress}>
      <CreateButton>
        <BasicText>+</BasicText>
      </CreateButton>
    </TouchableOpacity>
  )
}

const CreateButton = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(46, 134, 255);
  border-radius: 100px;
  width: 60px;
  height: 60px;
`;
const BasicText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
`;
