import { createStackNavigator } from "@react-navigation/stack";
import ProductsCreation from "../Views/ProductsCreation/ProductsCreation";


const CreateProductsStack = createStackNavigator();

export const CreateProductsStackRouter = () => {
  return (
    <CreateProductsStack.Navigator initialRouteName='Crear' >
      <CreateProductsStack.Screen name="Crear" component={ProductsCreation}  />
    </CreateProductsStack.Navigator>
  )
}