import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import FormInput from '../../Components/FormInput';
import useProductsCreation from './hooks/useProductsCreation';
import { productsCreationStyles } from './productsCreationStyles';
import { useFocusEffect } from '@react-navigation/native';
const ProductsCreation = () => {

  const {
    handleInputChange,
    sendProduct,
    loading,
    isDisabled,
    setForm
  } = useProductsCreation();
  
  useFocusEffect(
    React.useCallback(() => {
      setForm({
        name: '',
        description: ''
      })
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
          <View style={productsCreationStyles.container}>
          <FormInput handleChange={handleInputChange} name={'name'} placeholder='Nombre' style={productsCreationStyles.formInput} />
          <FormInput multiline handleChange={handleInputChange} name={'description'} placeholder='Descripción' style={{...productsCreationStyles.formInput, ...{
            height: 400,
            textAlignVertical: 'top',
          }}}  />
          <TouchableOpacity disabled={isDisabled} onPress={sendProduct} style={{...productsCreationStyles.formInput, ...{
            backgroundColor: 'black',
            padding: 10,
            alignItems: 'center',
            borderRadius: 5
          }}}>
            <Text style={{color: 'white'}}>Crear producto</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default ProductsCreation;