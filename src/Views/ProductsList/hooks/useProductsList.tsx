import React, { useMemo, useState } from 'react';
import axios from 'axios';
import { environments } from '../../../Common/environments';

export interface IProduct {
    _id: string,
    name: string,
    description: string,
    stockQuantity: number
}


export const useProductsList = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getProducts = async () => {
    setLoading(true);
    try {
        const { data } = await axios.get(environments.apiUrl + '/products');
        setProducts(Array.from(data).reverse() as IProduct[]);
    } catch (error) {
        console.error(error);
        setError('Error fetching data');
    } finally {
        setLoading(false);
    }
  }

  const handleSearch = (text: string) => {
    setSearch(text);
  }

  const filteredProducts = useMemo(() => {
    return products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
  }, [products, search]);

  return ({
    products,
    loading,
    error,
    getProducts,
    handleSearch,
    filteredProducts
  })
}
