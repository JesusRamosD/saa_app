import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { productsStyles } from '../../ProductsList/styles';

interface Props {
    _id: string,
    description: string,
    quantity: number
}

export default function Stock({
    _id,
    description,
    quantity
}: Props) {

  const navigation = useNavigation<StackNavigationProp<{
    'Detalles del Stock': { stock_id: string,_id: string },
  }>>();

  const router = useRoute();

  const handleClick = () => {
    //@ts-ignore
    navigation.navigate('Detalles del Stock', { _id: router!.params?._id, stock_id : _id });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
        <View style={productsStyles.product}>
           <View style={{
            width: '80%'
           }}>
              <Text style={productsStyles.productText} numberOfLines={1}>{description}</Text>
           </View>
            <Text style={{
              width: "auto",
              textAlign: 'center',
              flexShrink: 0,
            }}>{quantity}</Text>
        </View>
    </TouchableOpacity>
  )
}