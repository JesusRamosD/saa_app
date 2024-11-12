import React, { useMemo, useState } from 'react'
import axios from 'axios';
import { environments } from '../../../Common/environments'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function useProductsCreation() {

  const navigation = useNavigation<StackNavigationProp<{
    'Home': {}
  }>>();

  const [form, setForm] = useState({
    name: '',
    description: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  const sendProduct = async () => {
      setLoading(true);
    try {
      await axios.post(environments.apiUrl + '/products', form);
      navigation.navigate('Home', {});
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const isDisabled = useMemo(() => {
    return form.name === '' || form.description === '';
  },[form]);

  return ({
    form,
    handleInputChange,
    sendProduct,
    loading,
    isDisabled,
    setForm
  });
}
