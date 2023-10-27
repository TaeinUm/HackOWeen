import {View, Button, SafeAreaView, StyleSheet, Text} from "react-native";
import PinThread from "./PinThread";
import {useState} from "react";
import {getThreadsByLocation} from "../api/api";
import MapView from 'react-native-maps';


export default function Home() {
  const [showPinThread, setShowPinThread] = useState(false)
  const [selectedThreads, setSelectedThreads] = useState([])

  let state = {
    mapRegion: {
      latitude: 40.7128,
      longitude: -74.006,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
  }

  async function handleOnPinClick() {
    const threads = await getThreadsByLocation("")
    setSelectedThreads(threads)
    setShowPinThread(!showPinThread)
  }

  return (
    <View style={styles.container}>
      {showPinThread && <PinThread threads={selectedThreads} setState={setShowPinThread}/>}
      <View style={{position:'absolute', height:100, width:100, top:50, zIndex:100, backgroundColor:'white'}}>
        <Button title={"Temp Pin"} onPress={handleOnPinClick}></Button>
      </View>
      <MapView
        style={styles.map}
        initialRegion={state.mapRegion}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
