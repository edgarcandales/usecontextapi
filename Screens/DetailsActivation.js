import { View, Text,Button } from 'react-native'
import React,{useContext,useState} from 'react'
import { DataContext,PickedContext,ActivePickContext } from '../App'
import { NavigationContainer } from '@react-navigation/native'

const DetailsActivation = ({navigation}) => {
    const data=useContext(DataContext)
    const [pickedClient,setPickedClient]=useContext(PickedContext)
    const [activeClient,setActiveClient]=useContext(ActivePickContext)

    const ClientActivation=()=>{
        navigation.navigate('DetailsStatus')
        setActiveClient(data[pickedClient].id)
    }
    console.log(activeClient)
  return (
    <View>
      <Text style={{fontWeight:'bold'}}>Details of Delivery</Text>
        <Text>{data[pickedClient].client}</Text>
        <Text>{data[pickedClient].customer.address}</Text>
        <Text>{data[pickedClient].city}</Text>
        <Text>{data[pickedClient].delivery.status}</Text>
        {pickedClient==activeClient-1 && <Button
            title={'Go to details'}
            onPress={()=>navigation.navigate('DetailsStatus')}
            disabled={false}
        /> }
        {
        pickedClient!=activeClient-1 && pickedClient!=0 && activeClient!=0 && <Button
            title={'Another is Active'}
        />
        }

       

       { activeClient==0 && <Button
        title={'Make Active'}
        onPress={()=>ClientActivation()}
        disabled={false}
    />
    }

    </View>
  )
}

export default DetailsActivation