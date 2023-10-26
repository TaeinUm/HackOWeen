import {View, Text, StyleSheet} from "react-native";
import PinThread from "./PinThread";


export default function Home() {
  return(
    <View style={styles.container}>
      {/*<PinThread/>*/}
      <View style={{flex:1, backgroundColor:'red'}}>
        <Text>123</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    position:'absolute',
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
