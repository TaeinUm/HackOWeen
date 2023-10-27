import {View, Text, StyleSheet} from "react-native";
import PinThread from "./PinThread";
import MapView from 'react-native-maps';


export default function Home() {
  let state = {
    mapRegion: {
      latitude: 40.7128,
      longitude: -74.006,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },
  }



  return(
    <View style={styles.container}>
      {/*<PinThread/>*/}
      <View style={{flex:1, backgroundColor:'red'}}>
        <View style={styles.container}>
          <MapView 
            style={styles.map} 
            initialRegion={state.mapRegion}
          />
        </View>
      </View>
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
