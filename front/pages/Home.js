import {View, Button, SafeAreaView, StyleSheet, Text} from "react-native";
import PinThread from "./PinThread";
import {useState, Component, Suspense, useEffect} from "react";
import {getAllThreads, getThreadsByLocation} from "../api/api";
import MapView from "react-native-map-clustering";
import {Marker, Polygon, Circle} from 'react-native-maps';
import { useRecoilValue, useRecoilState } from "recoil";
import {allThreadsAtom, allMarkersAtom, selectedThreadsAtom} from "../recoil/state";
import {timestampTo12HourFormat} from "../util/util"


export default function HomeWrapper() {
  return (
    <Suspense fallback={<View/>}>
      <Home/>
    </Suspense>
  )
}

function Home() {
  const [showPinThread, setShowPinThread] = useState(false)
  const [selectedThreads, setSelectedThreads] = useState([])
  const [markers, setMarkers] = useRecoilState(allMarkersAtom)
  const [allThreads, setAllThreads] = useRecoilState(allThreadsAtom)

  // markers.map()
  
  let initialRegion = {
    mapRegion: {
      latitude: 40.758896,
      longitude: -73.985130,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    },

  }

  async function handleOnPinClick() {
    setShowPinThread(!showPinThread)
  }


  async function manufactureData(){
    let returnData=[];

    markers.forEach(marker => {
      // console.log(marker.properties)
      for (let index = 0; index < marker.properties.data; index++) {
        let newMarker = {
          id: marker._id + {index}, // ss
          longitude: marker.geometry.coordinates[0],
          latitude: marker.geometry.coordinates[1], 
          title: marker.name
        }
        returnData.push(newMarker)
      }
    });

    setMarkers(returnData)
  } 

  function getCircle(marker, color = "rgba(255, 0, 0, 0.5)"){
    return (
      <Circle
          // style={{opacity: 0.5}}
          key={"circle" + marker._id}
          center={{
            latitude: marker.geometry.coordinates[1], 
            longitude: marker.geometry.coordinates[0]
          }}
          radius={150}
          fillColor={color}
          strokeColor="rgba(255, 0, 0, 0)"
          strokeWidth={2}
          tappable={true}
          onPress={()=> console.log("Pressed")}
          />
    )
  }

  function handleSelectThreadOnMap(thread) {
    setSelectedThreads([thread]);
    setShowPinThread(true);
  }

  function renderMarkers(){

    let totalMarkers = [];

    for(let i = 0; i < allThreads.length; i++){
      let thread = allThreads[i];
      totalMarkers.push(
        <Marker
          key={thread._id}
          coordinate={{
            latitude: thread.coords.latitude ,
            longitude: thread.coords.longitude,
          }}
          title={thread.thread}
          description={timestampTo12HourFormat(thread.timestamp)}
          onPress={()=>{handleSelectThreadOnMap(thread)}}
        />
      );
    }

    for(let i = 0; i < markers.length; i++){
      // for(let j = 0; j < markers[i].properties.data; j++){
      //   let iv = 0;
      //   ++iv;
      //   let marker = markers[i];
      //   totalMarkers.push(
      //     <Marker
      //       key={marker._id + iv}
      //       coordinate={{
      //         latitude: marker.geometry.coordinates[1],
      //         longitude: marker.geometry.coordinates[0],
      //       }}
      //       title={marker.name}
      //     />
      //   );
      // }

      if(markers[i].properties.data > 70){
        totalMarkers.push(
          getCircle(markers[i])
        )
      }
      else if(markers[i].properties.data > 35){
        totalMarkers.push(
          getCircle(markers[i], "rgba(225, 165, 0, 0.5)")
        )
      }
      else if(markers[i].properties.data > 10){
        totalMarkers.push(
          getCircle(markers[i], "rgba(255, 255, 0, 0.5)")
        )
      }
      else if(markers[i].properties.data >= 0){
        totalMarkers.push(
          getCircle(markers[i], "rgba(0, 255, 0, 0.5)")
        )
      }
      
    }

    return totalMarkers;
  }

  return (
    
    <View style={styles.container}>
      {showPinThread && <PinThread threads={selectedThreads} setState={setShowPinThread}/>}
      {/* <View style={{position: 'absolute', height: 100, width: 100, top: 50, zIndex: 100, backgroundColor: 'white'}}>
        <Button title={"Temp Pin"} onPress={handleOnPinClick}></Button>
      </View> */}
      <MapView style={styles.map} initialRegion={initialRegion.mapRegion} >
        {renderMarkers()}
      </MapView>
    </View>
  )
}

{/* <Circle
  center={
    
      {latitude: 40.915255, longitude: -74.032508} // Upper Left

    
  }
  radius={10000}
  fillColor="#27f"
  strokeColor="#27f"
  strokeWidth={2}
  tappable={true}
  onPress={()=> console.log("Pressed")}
/> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

