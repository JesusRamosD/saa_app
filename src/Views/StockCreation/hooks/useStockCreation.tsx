import React, { useMemo, useState } from 'react'
import axios from 'axios';
import { environments } from '../../../Common/environments'
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function useStockCreation() {

  const router = useRoute();

  const navigation = useNavigation<StackNavigationProp<{
    'Stocks': { _id : string }
  }>>();

  const [form, setForm] = useState({
    description: '',
    quantity: ''
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const sendStock = async () => {
      setLoading(true);
    try {
      await axios.post(environments.apiUrl + '/stocks', {
        ...form,
        quantity: Number(form.quantity),
        // @ts-ignore
        product_id: router.params._id
      });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const isDisabled = useMemo(() => {
    return form.quantity === '' || form.description === '';
  },[form]);

  return ({
    form,
    handleInputChange,
    sendStock,
    loading,
    isDisabled,
    setForm
  });
}
