
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";

const QRScanner = () => {

  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  const qrSize = screenWidth * 0.95;

  const checkJson = (json: string) => {
    try {
      JSON.parse(json);
      return true;
    } catch (error) {
      return false;
    }
  }
  const navigation = useNavigation<StackNavigationProp<{
    'Home': { 
      screen: string,
      params: {
        _id: string,
        stock_id: string
     },
}}>>();

  const [hasPermission, setHasPermission] = useState(false);
  const device = useCameraDevice("back");
  const codeScanner = useCodeScanner({
    codeTypes: ["qr"],
    onCodeScanned: (codes) => {
      if(checkJson(codes[0].value || "")){
        const data : {
          _id: string,
          stock_id: string
        } = JSON.parse(codes[0].value || "");
        navigation.navigate('Home', { 
          screen: "Detalles del Stock",
          params: { _id: data._id, stock_id: data.stock_id }  
        });
      }
    },
  });

  useEffect(() => {
    const requestCameraPermission = async () => {
      const permission = await Camera.requestCameraPermission();
      console.log("Camera.requestCameraPermission ", permission);
      setHasPermission(permission === "granted");
    };
    requestCameraPermission();
    setTimeout(() => {
    }, 15 * 1000);
  }, []);

  if (device == null || !hasPermission) {
    return (
      <View style={styles.page2}>
        <Text style={{ backgroundColor: "white" }}>
          Camera not available or not permitted
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.page2}>
      <Text style={{
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20,
        position: "absolute",
        top: screenHeight / 2 - qrSize,
      }}>
        Por favor escanee el QR de un Stock
      </Text>
      <Camera
        codeScanner={codeScanner}
        style={{
          width: qrSize,
          height: qrSize,
          position: "absolute",
          top: screenHeight / 2 - qrSize / 2,
        }}
        device={device}
        isActive={true}
      />
    </View>
  );
};

export default QRScanner;

const styles = StyleSheet.create({
  page2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c8e0ff",
    width: "100%",
    height: "100%",
  },
});
