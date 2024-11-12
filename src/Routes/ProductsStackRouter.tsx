import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsList from '../Views/ProductsList/ProductsList';
import ProductsDetails from '../Views/ProductsDetails/ProductsDetails';
import StockByProductId from '../Views/StockByProductId/StockByProductId';
import StockCreation from '../Views/StockCreation/StockCreation';
import StockDetails from '../Views/StockDetails/StockDetails';
import QrVisualization from '../Views/QrVisualization/QrVisualization';

const ProductsStack = createStackNavigator();

const ProductsStackRouter = () => {
  return (
    <ProductsStack.Navigator initialRouteName='Productos' >
      <ProductsStack.Screen name="Detalles del Producto" component={ProductsDetails}  />
      <ProductsStack.Screen   name="Productos" component={ProductsList}  />
      <ProductsStack.Screen name="Stocks" component={StockByProductId} />
      <ProductsStack.Screen name="Agregar Stock" component={StockCreation} />
      <ProductsStack.Screen name="Detalles del Stock" component={StockDetails} />
      <ProductsStack.Screen name="Visualizar QR" component={QrVisualization} />
    </ProductsStack.Navigator>
  )
}

export default ProductsStackRouter