import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashView = ({navigation}) => {

 useEffect(() => {
   
  setTimeout(() => {
    console.log('hello')
    navigation.navigate('onboard')
  }, 2000);
 }, [])
 

  return (
    <View>
      <Image style={{height:'100%',width:'100%'}} source={require('../MyApp/images/Splash.png')}></Image>
    </View>
  )
}

export default SplashView

const styles = StyleSheet.create({})