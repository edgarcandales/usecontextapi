import { View, Text,FlatList,Button } from 'react-native'
import React,{useContext} from 'react'
import { DataContext,PickedContext,ActivePickContext } from '../App'


const Main = ({navigation}) => {
    const data=useContext(DataContext)
    const [pickedClient,setPickedClient]=useContext(PickedContext)
    const [activeClient,setActiveClient]=useContext(ActivePickContext)

    const showDetails=(id)=>{
        console.log(id)
        setPickedClient(id-1)
        navigation.navigate('DetailsActivation')
    }
      const renderItem = ({ item }) => (
          <Button
            title={item.client}
            onPress={()=>showDetails(item.id)}
            color={item.id==activeClient ? 'red' : 'blue'}
          />
      ) 
console.log(data,'details')
  return (
    <View>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Main