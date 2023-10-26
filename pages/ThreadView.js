import {View, Text, StyleSheet} from "react-native";


export default function ThreadView() {
  return (
    <View style={styles.container}>
      <Text>
        Threads
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
