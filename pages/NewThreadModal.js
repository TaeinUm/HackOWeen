import {Button, Text} from "react-native";
import {FormControl, Modal} from "native-base";
import styled from "styled-components/native";
import {windowWidth} from "../util/util";
import React, {useEffect, useState} from "react";
import * as Location from 'expo-location';
import {createThread} from "../api/api";
import {reloadAllThreadsAtom} from "../recoil/state";
import {useRecoilState} from "recoil";


export default function NewThreadModal({setState}) {
  const [thread, setThread] = useState("")
  const [location, setLocation] = useState(null);
  const [reloadAllThreads, setReloadAllThreads] = useRecoilState(reloadAllThreadsAtom);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted')
        return;

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  function handleButtonPress() {
    createThread({
      thread: thread,
      ...location,
    }).then(() => {
      setReloadAllThreads(reloadAllThreads + 1)
    })
    setState(false)
  }

  return (
    <Modal isOpen={true} onClose={() => {setState(false)}}>
      <Modal.Content maxWidth="500px" style={{backgroundColor:'rgba(34,36,40,1)'}}>
        <Modal.CloseButton />
        <Modal.Header style={{backgroundColor:'rgba(34,36,40,1)'}}>
          <Text style={{color:'white', fontWeight:'700'}}>Thread</Text>
        </Modal.Header>
        <Modal.Body>
          <InfoInputField placeholder="Pin a thread on your location." placeholderTextColor={'#9a9a9a'} flex="1" multiline={true} autoCapitalize="none" onChangeText={(text) => setThread(text)}/>
          <Button title={"Pin"} onPress={handleButtonPress}/>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}

const InfoInputField = styled.TextInput`
  width: ${windowWidth}px;
  height: 50px;
  font-size: 14px;
  color: white;
`
