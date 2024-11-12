import React, { useState } from 'react'
import { IProduct } from '../../ProductsList/hooks/useProductsList';
import axios from 'axios';
import { environments } from '../../../Common/environments';

export const useProductsDetails = () => {

  const [details, setDetails] = useState<IProduct>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getDetails = async (id: string) => {
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.get(environments.apiUrl + '/products/' + id);
      setDetails(data);
    } catch (error) {
      setError("Error al obtener los detalles del producto");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id: string) => {
    setLoading(true);
    setError('');
    try {
      await axios.delete(environments.apiUrl + '/products/' + id);
      console.log('Producto eliminado');
    } catch (error) {
      setError("Error al borrar el producto");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return ({
    details,
    loading,
    error,
    getDetails,
    deleteProduct,
  });
};
