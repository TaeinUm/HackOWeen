import {View, Button, SafeAreaView, StyleSheet} from "react-native";
import PinThread from "./PinThread";
import {useState, Component} from "react";
import {getThreadsByLocation} from "../api/api";
import MapView from "react-native-map-clustering";
import {Marker} from 'react-native-maps';


export default function Home() {
  const [showPinThread, setShowPinThread] = useState(false)
  const [selectedThreads, setSelectedThreads] = useState([])
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
    const threads = await getThreadsByLocation("")
    setSelectedThreads(threads)
    setShowPinThread(!showPinThread)
  }


  function renderRandomMarkers(n) {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = state.mapRegion;
    return new Array(n).fill().map((x, i) => (
      <Marker
        key={i}
        coordinate={{
          latitude: latitude + (Math.random() - 0.5) * latitudeDelta,
          longitude: longitude + (Math.random() - 0.5) * longitudeDelta
        }}
      />
    ));
  }

  return(
    <View style={{flex:1}}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={state.mapRegion}
        >
          {renderRandomMarkers(144)}
        </MapView>
      </View>
    </View>
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
