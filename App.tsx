/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  UsbSerialManager,
  Device,
} from 'react-native-usb-serialport-for-android';

function App(): JSX.Element {
  const [result, setResult] = useState<Device[]>([]);
  const [countUsbDev, setCountUsbDev] = useState(-1);

  useEffect(() => {
    UsbSerialManager.list().then(devices => {
      console.log(devices);
      setCountUsbDev(devices.length);
      setResult(devices);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.deviceCount}>Find USB Devices: {countUsbDev}</Text>
      {result.map(device => (
        <Text key={device.deviceId}>
          deviceId: {device.deviceId}, venderId: {device.vendorId}, productId:{' '}
          {device.productId}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  deviceCount: {
    fontSize: 24,
    fontWeight: '900',
  },
});

export default App;
