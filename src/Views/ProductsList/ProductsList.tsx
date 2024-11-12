import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useProductsList } from './hooks/useProductsList'
import { SafeAreaView } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import Product from './components/Product';
import { productsStyles } from './styles';
import Icon from '@react-native-vector-icons/fontawesome5';
import { useFocusEffect } from '@react-navigation/native';

const ProductsList = () => {

  const {
    loading,
    error,
    getProducts,
    filteredProducts,
    handleSearch,
  } = useProductsList();


  useFocusEffect(
    React.useCallback(() => {
      getProducts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  return (
    <SafeAreaView >
      <ScrollView 
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={getProducts}
            colors={['grey']}
            progressBackgroundColor={'black'}
          />
        } >
        <View>
          <View  style={productsStyles.searchContainer}>
          <Icon style={{
            width: 20,
          }} name="search" size={20} color="black" iconStyle='solid' />
          <TextInput 
              style={productsStyles.search}
              placeholder="Buscar productos"
              onChangeText={text => handleSearch(text)}
            />
          </View>
          {error && <Text>{error}</Text>}
          {filteredProducts.map(product => (
           <Product 
              key={product._id}
              _id={product._id}
              name={product.name}
              description={product.description}
              stockQuantity={product.stockQuantity} 
              />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductsList