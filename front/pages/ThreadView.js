import {Suspense} from 'react'
import {View, Text, StyleSheet, SafeAreaView} from "react-native";
import {Box, ScrollView} from "native-base";
import ThreadItem from "./ThreadItem";



export default function ThreadView({threads}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.shadow}>
        <Text style={{textAlign:'left', fontWeight:'600', color:'white', fontSize:20, padding:20}}>New Threads</Text>
      </View>
      <View style={{flex:1, width:'100%', paddingLeft:20, paddingRight:20}}>
        <ScrollView>
          {
            threads.map((thread) => (<ThreadItem key={thread.id} thread={thread}/>))
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: '#17171a',
  },
  shadow: {
    backgroundColor: '#17171a',
    shadowColor: 'rgba(0,0,0,0.86)',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
