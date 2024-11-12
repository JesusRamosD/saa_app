import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'
import { productDetailsStyles } from './productDetailsStyle'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { useProductsDetails } from './hooks/useProductsDetails'
import { StackNavigationProp } from '@react-navigation/stack'

const ProductsDetails = () => {

  const router = useRoute();

  const {
    details,
    loading,
    error,
    getDetails,
    deleteProduct
  } = useProductsDetails();

  useFocusEffect(
    React.useCallback(() => {
      //@ts-ignore
      getDetails(router.params!?._id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  const navigation = useNavigation<StackNavigationProp<{
    'Stocks': { _id: string },
    'Productos': undefined
  }>>();

  const handleClick = () => {
      //@ts-ignore
    navigation.navigate('Stocks', { _id: router.params!?._id });
  };

  const handleClickDelete = () => {
    //@ts-ignore
    deleteProduct(router.params!?._id);
    navigation.goBack()
  };

  return (
    <SafeAreaView>
    <ScrollView refreshControl={
      <RefreshControl
        refreshing={loading}
        onRefresh={() => {}}
        colors={['grey']}
        progressBackgroundColor={'black'}
      />
    } >
      <View style={productDetailsStyles.container}>
        <Text>{error}</Text>
        <Text style={productDetailsStyles.formInput}>
          {details?.name}
        </Text>
        <Text style={productDetailsStyles.descriptionInput}>
          {details?.description}
        </Text>
        <Text style={{
          textAlign: 'center',
        }}>
          Cantidad de productos : {details?.stockQuantity}
        </Text>
        <TouchableOpacity style={productDetailsStyles.button} onPress={handleClick}>
          <Text style={{color: 'white'}}>Ver Stock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...productDetailsStyles.button, backgroundColor: "red"}} onPress={handleClickDelete}>
          <Text style={{color: 'white'}}>Borrar Producto</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default ProductsDetails