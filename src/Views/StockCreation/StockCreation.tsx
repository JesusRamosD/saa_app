import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import FormInput from '../../Components/FormInput';
import { productsCreationStyles } from '../ProductsCreation/productsCreationStyles';
import useStockCreation from './hooks/useStockCreation';

const StockCreation = () => {

  const {
    handleInputChange,
    sendStock,
    loading,
    isDisabled,
  } = useStockCreation();

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
          <View style={productsCreationStyles.container}>
          <FormInput multiline handleChange={handleInputChange} name={'description'} placeholder='Descripción' style={{...productsCreationStyles.formInput, ...{
            height: 400,
            textAlignVertical: 'top',
          }}}  />
          <FormInput type='number-pad' handleChange={handleInputChange} name={'quantity'} placeholder='Cantidad de unidades' style={productsCreationStyles.formInput} />
          <TouchableOpacity disabled={isDisabled} onPress={sendStock} style={{...productsCreationStyles.formInput, ...{
            backgroundColor: 'black',
            padding: 10,
            alignItems: 'center',
            borderRadius: 5
          }}}>
            <Text style={{color: 'white'}}>Crear Stock</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default StockCreation;