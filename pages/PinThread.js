import React, { useCallback, useMemo, useRef } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {Box, Divider, ScrollView} from "native-base";
import {AntDesign} from "@expo/vector-icons";
import ThreadItem from "./ThreadItem";

export default function PinThread({threads, setState}) {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '70%'], []);

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);


  return (
    <View style={{position:'absolute', width:'100%', height:'100%', bottom:0, zIndex:100}}>
      <View style={{flex:1, padding: 10, pointerEvents: 'auto'}}>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleIndicatorStyle={{backgroundColor:'#676767'}}
          backgroundStyle={{backgroundColor:'#17171a'}}
        >
          <View style={{display:'flex', flex: 1}}>
            <View style={{...styles.shadow, display:'flex', flex:0, flexDirection:'row', justifyContent:'center'}}>
              <Text style={{flex:1, marginBottom:20, marginLeft:20, marginRight:20, textAlign:'left', color:'white', fontWeight:'700', fontSize:20}}>Threads</Text>
              <Box style={{flex:0, marginRight:20}}>
                <AntDesign onPress={() => setState(false)} name={"closecircle"} size={20} color={'#818181'}/>
              </Box>
            </View>
            <View style={{paddingLeft:20, paddingRight:20}}>
              <ScrollView>
                {
                  threads.map((thread) => (
                    <ThreadItem thread={thread} key={thread.id}/>
                  ))
                }
                <View style={{height: 90}}></View>
              </ScrollView>
            </View>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  shadow: {
    backgroundColor: '#17171a',
    shadowColor: 'rgba(0,0,0,0.9)',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
