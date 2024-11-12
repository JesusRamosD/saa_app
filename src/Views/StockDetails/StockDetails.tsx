import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useStockDetails } from './hooks/useStockDetails'
import { SafeAreaView } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { productDetailsStyles } from '../ProductsDetails/productDetailsStyle';
import FormInput from '../../Components/FormInput';
import { productsCreationStyles } from '../ProductsCreation/productsCreationStyles';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const StockDetails = () => {

  const {
    stockQuantity,
    stockDetails,
    getStockDetails,
    handleInputChange,
    loading,
    handleStockUpdate
  } = useStockDetails();

  const router = useRoute();



  const navigation = useNavigation<StackNavigationProp<{
    "Visualizar QR": {
      stock_id: string;
      _id: string;
    };
  }>>();

  const handleCancel = () => {
    // @ts-ignore
    navigation.goBack();
  };

  const handleNavigateToQr = () => {
    // @ts-ignore
    navigation.navigate('Visualizar QR', router.params);
  };

  useFocusEffect(
    React.useCallback(() => {
      getStockDetails(
        //@ts-ignore
        router.params!?.stock_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

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
        <Text style={productDetailsStyles.descriptionInput}>
          {stockDetails?.description}
        </Text>
        <Text style={{
          textAlign: 'center',
        }}>
          Cantidad de unidades :
        </Text>
        <View style={{
          width: '100%',
        }}>
          <FormInput 
            type='number-pad' 
            handleChange={handleInputChange} 
            name={'quantity'} 
            placeholder='Cantidad de unidades' 
            style={{...productsCreationStyles.formInput, with: "80%"}} 
            value={stockQuantity.toString()}
          />
        </View>
        <TouchableOpacity style={{...productDetailsStyles.button, backgroundColor: "red"}} onPress={handleCancel}>
          <Text style={{color: 'white'}}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...productDetailsStyles.button, backgroundColor: "green"}} onPress={handleStockUpdate}>
          <Text style={{color: 'white'}}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...productDetailsStyles.button, backgroundColor: "blue"}} onPress={handleNavigateToQr}>
          <Text style={{color: 'white'}}>Ver QR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default StockDetails