import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Screens/Main';
import DetailsActivation from './Screens/DetailsActivation';
import DetailsStatus from './Screens/DetailsStatus';
const Stack = createNativeStackNavigator();

export const DataContext=React.createContext()
export const PickedContext=React.createContext()
export const ActivePickContext=React.createContext()




export default function App() {

  const[data,setData]=useState([{}]);
  const[pickedClient,setPickedClient]=useState(0)
  const[activeClient,setActiveClient]=useState(0)

  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    fetch('https://60e84194673e350017c21844.mockapi.io/api/deliveries')
    .then(res=>res.json())
    .then(data=>setData(data))
    .catch((error)=> console.log('error') ),
    setLoading(false)
  },[])
console.log(loading)
  return (
    loading ?
    <View>
      <Text>Loading...</Text>
    </View>
    :
    <DataContext.Provider value={data}>
      <PickedContext.Provider value={[pickedClient,setPickedClient]}>
        <ActivePickContext.Provider value={[activeClient,setActiveClient]}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
              <Stack.Screen name="Main" component={Main} />
              <Stack.Screen name="DetailsActivation" component={DetailsActivation} />
              <Stack.Screen name="DetailsStatus" component={DetailsStatus} />
            </Stack.Navigator>
          </NavigationContainer>
        </ActivePickContext.Provider>
      </PickedContext.Provider >
    </DataContext.Provider>
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
