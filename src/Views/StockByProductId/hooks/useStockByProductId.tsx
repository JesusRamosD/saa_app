import axios from 'axios';
import React, { useState } from 'react';
import { environments } from '../../../Common/environments';

export interface IStock  {
    "_id": string,
    "description": string,
    "quantity": number,
    "product_id": string
  }

export const useStockByProductId = () => {

    const [stocks, setStocks] = useState<IStock[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getStockByProductId = async (productId: string) => {
        setLoading(true);
        try {
            const { data } = await axios.get(environments.apiUrl + `/stocks/${productId}`);
            setStocks(data);
            console.log(data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


  return ({
    stocks,
    loading,
    getStockByProductId
  })
}
