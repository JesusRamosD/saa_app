import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsStackRouter from './ProductsStackRouter';
import QrScan from '../Views/QrScan/QrScan';
import Icon from '@react-native-vector-icons/fontawesome5';
import { CreateProductsStackRouter } from './CreationStackRouter';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon name='home' iconStyle='solid' size={24} color={color} />
                ),
                
            }} name="Home" component={ProductsStackRouter} />
            <Tab.Screen options={{
                tabBarLabel: 'Escanear',
                tabBarIcon: ({ color }) => (
                    <Icon name='camera' iconStyle='solid' size={24} color={color} />
                ),
            }} name="Scan" component={QrScan} />
            <Tab.Screen options={{
                tabBarLabel: 'Crear Producto',
                tabBarIcon: ({ color }) => (
                    <Icon name='plus-circle' iconStyle='solid' size={24} color={color} />
                ),
            }}  name="Create" component={CreateProductsStackRouter} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router