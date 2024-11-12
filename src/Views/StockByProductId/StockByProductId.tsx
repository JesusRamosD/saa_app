import { Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { useStockByProductId } from './hooks/useStockByProductId';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import Stock from './components/Stock';
import { productDetailsStyles } from '../ProductsDetails/productDetailsStyle';
import { StackNavigationProp } from '@react-navigation/stack';

const StockByProductId = () => {

  const {
    getStockByProductId,
    stocks,
    loading,
  } = useStockByProductId();

  const router = useRoute();

  useFocusEffect(useCallback(() => {
      if(router.params){
      getStockByProductId(
        //@ts-ignore
        router.params!?._id
      );}
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      router.params,
    ])
  );

  const navigation = useNavigation<StackNavigationProp<{
    'Agregar Stock': { _id: string },
  }>>();

  const handleClick = () => {
      //@ts-ignore
    navigation.navigate('Agregar Stock', { _id: router.params!?._id });
  };

  return (
    <SafeAreaView >
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={loading}
         //@ts-ignore
          onRefresh={() => getStockByProductId(router.params!?._id)}
          colors={['grey']}
          progressBackgroundColor={'black'}
        />
      } >
      <View>
        <TouchableOpacity style={{...productDetailsStyles.button, margin: 10, width: "calc(100% - 10)"}} onPress={handleClick}>
          <Text style={{color: 'white'}}>Agregar stock</Text>
        </TouchableOpacity>
        {stocks.map(stock => (
         <Stock
            key={stock._id}
            _id={stock._id}
            description={stock.description}
            quantity={stock.quantity}
            />
        ))}
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

export default StockByProductId;
