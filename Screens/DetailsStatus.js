import { View, Text,Button } from 'react-native'
import React,{useContext,useState} from 'react'
import { DataContext,PickedContext } from '../App'


const DetailsStatus = ({navigation}) => {
    const data=useContext(DataContext)
    const [pickedClient,setPickedClient]=useContext(PickedContext)
  return (
    <View>
      <Text style={{fontWeight:'bold'}}>Details of Delivery</Text>
        <Text>{data[pickedClient].client}</Text>
        <Text>{data[pickedClient].customer.address}</Text>
        <Text>{data[pickedClient].city}</Text>
        <Text>{data[pickedClient].delivery.status}</Text>
    <Button
        title={'Delivered'}
    />
    <Button
        title={'Undelivered'}
    />

    </View>
  )
}

export default DetailsStatus