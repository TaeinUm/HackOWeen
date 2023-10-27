import {View, Button, SafeAreaView, StyleSheet} from "react-native";
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
    <SafeAreaView style={styles.container}>
      <Button title={"Show Pin"} onPress={handleOnPinClick} ></Button>
      <View style={{flex:1, width:'100%'}}>
        {showPinThread && <PinThread threads={selectedThreads} setState={setShowPinThread}/>}
      </View>
      {/*<View style={{flex:1}}>*/}
      {/*  <View style={styles.container}>*/}
      {/*    <MapView*/}
      {/*      style={styles.map}*/}
      {/*      initialRegion={state.mapRegion}*/}
      {/*    />*/}
      {/*  </View>*/}
      {/*</View>*/}
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
  map: {
    width: '100%',
    height: '100%',
  },
});
