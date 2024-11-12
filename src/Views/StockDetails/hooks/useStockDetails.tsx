import React, { useState } from 'react'
import { IStock } from '../../StockByProductId/hooks/useStockByProductId';
import axios from 'axios';
import { environments } from '../../../Common/environments';

export const useStockDetails = () => {

  const [stockQuantity, setStockQuantity] = useState(0);
  const [stockDetails, setStockDetails] = useState<IStock>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (name: string, value: string) => {
    setStockQuantity(Number(value));
  };

  const getStockDetails = async (stockId: string) => {
    setLoading(true);
    try {
        const { data } = await axios.get(environments.apiUrl + `/stocks/stock/${stockId}`);
        setStockDetails(data);
        setStockQuantity(data.quantity);
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Stock Details Fetched');
        setLoading(false);
    }
  };

  const handleStockUpdate = async () => {
    setLoading(true);
    try {
        await axios.put(environments.apiUrl + `/stocks`, {
            quantity: Number(stockQuantity),
            stock_id: stockDetails?._id
        });
        console.log('Stock Updated');
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
  };


  return ({
    stockQuantity,
    stockDetails,
    getStockDetails,
    handleInputChange,
    loading,
    handleStockUpdate
  })
}
