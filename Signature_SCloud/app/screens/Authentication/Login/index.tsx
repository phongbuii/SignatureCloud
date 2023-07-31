import { Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { TextInput } from 'react-native-gesture-handler'
import IMAGE from '@app/assets/image'

const Login = (props: any) => {

  const [showKeyboard, setshowKeyboard] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => { setshowKeyboard(!showKeyboard) });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => { setshowKeyboard(!showKeyboard) });
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [showKeyboard])


  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>

        <View style={styles.header} />

        <View style={{ flex: 1 }}>
          <View style={styles.viewImg}>
            <Image source={IMAGE.logoLogin} style={styles.logoLogin} />
          </View>
          <View style={styles.content}>
            <TextInput style={styles.viewInput} placeholder='Email' />
            <TextInput style={styles.viewInput} placeholder='Password' />
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            <Text>ver1.0</Text>
          </View>
        </View>



      </View>
    </TouchableWithoutFeedback>
  )
}

export default Login

