import { KeyboardTypeOptions, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

interface Props {
    style: any;
    placeholder: string;
    handleChange: (name: string, text: string) => void;
    name: string;
    type?: KeyboardTypeOptions | undefined;
    value?: string;
    multiline?: boolean;
}

export default function FormInput({
    style,
    placeholder,
    handleChange,
    name,
    type,
    value,
    multiline = false
}: Props) {
  return (
    <View style={{...style}}>
      <TextInput style={{
        color: 'black',
      }}  multiline={multiline}  value={value} keyboardType={type} onChangeText={(text) => handleChange(name, text)}  placeholder={placeholder} />
    </View>
  )
}