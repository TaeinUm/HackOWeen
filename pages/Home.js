import {View, Text, StyleSheet, Button, SafeAreaView} from "react-native";
import PinThread from "./PinThread";
import {useState} from "react";
import {selectedThreadsAtom} from "../recoil/state";
import {useRecoilState} from "recoil";
import {getThreadsByLocation} from "../api/api";


export default function Home() {
  const [showPinThread, setShowPinThread] = useState(false)
  const [selectedThreads, setSelectedThreads] = useState([])

  async function handleOnPinClick() {
    const threads = await getThreadsByLocation("")
    setSelectedThreads(threads)
    setShowPinThread(!showPinThread)
  }

  return(
    <SafeAreaView style={styles.container}>
      <Button title={"Show Pin"} onPress={handleOnPinClick} ></Button>
      <View style={{flex:1, width:'100%'}}>
        {showPinThread && <PinThread threads={selectedThreads} setState={setShowPinThread}/>}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
