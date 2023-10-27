import {View, Button, SafeAreaView, StyleSheet, Text} from "react-native";
import PinThread from "./PinThread";
import {useState, Component, Suspense} from "react";
import {getAllThreads, getThreadsByLocation} from "../api/api";
import MapView from "react-native-map-clustering";
import {Marker} from 'react-native-maps';
import {allThreadsAtom} from "../recoil/state";
import {useRecoilState} from "recoil";


export default function HomeWrapper() {
  return (
    <Suspense fallback={<View/>}>
      <Home/>
    </Suspense>
  )
}

function Home() {
  const [showPinThread, setShowPinThread] = useState(false)
  const [allThreads, setAllThreads] = useRecoilState(allThreadsAtom)
  const [markers, setMarkers] = useState([{
    latitude: 40.7128,
    longitude: -74.006,
    title: "marker1",
    description: "marker",
  }])
  let state = {
    mapRegion: {
      latitude: 40.7128,
      longitude: -74.006,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
  }

  async function handleOnPinClick() {
    setShowPinThread(!showPinThread)
  }

  function renderRandomMarkers(n) {
    const {latitude, longitude, latitudeDelta, longitudeDelta} = state.mapRegion;
    return new Array(n).fill().map((x, i) => (
      <Marker
        key={i}
        coordinate={{
          latitude: latitude + (Math.random() - 0.5) * latitudeDelta,
          longitude: longitude + (Math.random() - 0.5) * longitudeDelta
        }}
        title={"abc"}
      />
    ));
  }

  return (
    <View style={styles.container}>
      {showPinThread && <PinThread threads={allThreads} setState={setShowPinThread}/>}
      <View style={{position: 'absolute', height: 100, width: 100, top: 50, zIndex: 100, backgroundColor: 'white'}}>
        <Button title={"Temp Pin"} onPress={handleOnPinClick}></Button>
      </View>
      <MapView style={styles.map} initialRegion={state.mapRegion}>
        {renderRandomMarkers(144)}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

