import {View, Text} from "react-native";
import {Divider} from "native-base";
import React from "react";
import {timestampTo12HourFormat} from "../util/util";


export default function ThreadItem({thread}) {
  return (
    <View>
      <View style={{paddingBottom:10}}>
        <Text style={{color:'#d2d2d2', marginTop:10, fontSize:16, fontWeight:'600'}}>{thread.thread}</Text>
        <Text style={{color:'#d2d2d2', marginTop:10, fontSize:14, textAlign:'right'}}>{timestampTo12HourFormat(thread.timestamp)}</Text>
      </View>
      <Divider style={{backgroundColor:'#282828'}}/>
    </View>
  )
}
