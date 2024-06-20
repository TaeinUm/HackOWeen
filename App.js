import {StyleSheet, View} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {NativeBaseProvider} from "native-base";
import {RecoilRoot} from "recoil";
import NewThreadModal from "./pages/NewThreadModal";
import {Suspense, useState} from "react";
import MainTabNavigator from "./pages/MainTabNavigator";


export default function App() {
  const [newThreadModalOn, setNewThreadModalOn] = useState(false)

  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Suspense fallback={<View/>}>
            {newThreadModalOn && <NewThreadModal setState={setNewThreadModalOn}/>}
            <MainTabNavigator setModal={setNewThreadModalOn}/>
          </Suspense>
        </GestureHandlerRootView>
      </NativeBaseProvider>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
