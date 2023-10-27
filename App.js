import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Box, NativeBaseProvider} from "native-base";
import {Feather} from "@expo/vector-icons";



import Home from "./pages/Home";
import ThreadView from "./pages/ThreadView";
import {RecoilRoot} from "recoil";
import CreateNewThreadButton from "./pages/CreateNewThreadButton";
import NewThreadModal from "./pages/NewThreadModal";
import {useState} from "react";
import Empty from "./pages/Empty";

const Tab = createBottomTabNavigator();

function getIconByName(name) {
  if (name === "Home")
    return 'map'
  if (name === "ThreadView")
    return 'message-square'
  else
    return 'home'
}


export default function App() {
  const [newThreadModalOn, setNewThreadModalOn] = useState(false)
  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          {newThreadModalOn && <NewThreadModal setState={setNewThreadModalOn}/>}
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                  backgroundColor: 'rgba(34,36,40,1)',
                },
                tabBarIcon: ({ color, size }) => {
                  return <Feather name={getIconByName(route.name)} size={size} color={color} />;
                },
              })}
            >
              <Tab.Screen name={"Home"} component={Home}/>
              <Tab.Screen name="NewThread" component={Empty}
                options={() => ({
                  tabBarButton: () => (
                    <Box style={{top: -20}}>
                      <CreateNewThreadButton onPress={() => {setNewThreadModalOn(true)}}/>
                    </Box>
                  )
                })}/>
              <Tab.Screen name={"ThreadView"} component={ThreadView}/>
            </Tab.Navigator>
          </NavigationContainer>
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
