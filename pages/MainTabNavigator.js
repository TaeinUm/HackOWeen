import {Feather} from "@expo/vector-icons";
import Home from "./Home";
import Empty from "./Empty";
import {Box} from "native-base";
import CreateNewThreadButton from "./CreateNewThreadButton";
import ThreadView from "./ThreadView";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useRecoilValue} from "recoil";
import {allThreadsAtom} from "../recoil/state";


const Tab = createBottomTabNavigator();

function getIconByName(name) {
  if (name === "Home")
    return 'map'
  if (name === "ThreadView")
    return 'message-square'
  else
    return 'home'
}


export default function MainTabNavigator({setModal}) {
  const threads = useRecoilValue(allThreadsAtom);

  return (
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
                          <CreateNewThreadButton onPress={() => {setModal(true)}}/>
                        </Box>
                      )
                    })}/>
        <Tab.Screen name={"ThreadView"}>
          {props => <ThreadView {...props} threads={threads}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
