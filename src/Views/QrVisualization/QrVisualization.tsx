import { useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Dimensions, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QrVisualization = () => {

  const router = useRoute();

  useEffect(() => {
    console.log(router)
  }, [router]);

  const screenWidth = Dimensions.get('screen').width;

  const qrSize = screenWidth * 0.7;

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <QRCode 
        // @ts-ignore
        value={JSON.stringify({
          //@ts-ignore
          _id: router.params?._id,
          //@ts-ignore
          stock_id: router.params?.stock_id,
        })}
        size={qrSize}
      />
    </View>
  )
}

export default QrVisualization