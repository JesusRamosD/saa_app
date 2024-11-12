import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { productsStyles } from '../styles';

interface Props {
    _id: string,
    name: string,
    description: string,
    stockQuantity: number
}

export default function Product({
    _id,
    name,
    description,
    stockQuantity
}: Props) {

  const navigation = useNavigation<StackNavigationProp<{
    'Detalles del Producto': { _id: string, stockQuantity: number },
  }>>();

  const handleClick = () => {
    navigation.navigate('Detalles del Producto', { _id, stockQuantity });
  };

  return (
    <TouchableOpacity onPress={handleClick}>
        <View style={productsStyles.product}>
           <View style={{
            width: '80%'
           }}>
              <Text style={productsStyles.productText} numberOfLines={1}>{name}</Text>
              <Text style={productsStyles.productText} numberOfLines={1}>{description}</Text>
           </View>
            <Text style={{
              width: "auto",
              textAlign: 'center',
              flexShrink: 0,
            }}>{stockQuantity}</Text>
        </View>
    </TouchableOpacity>
  )
}