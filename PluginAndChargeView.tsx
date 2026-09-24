import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PluginAndChargeView = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{marginHorizontal:20}}>
            <View style={{flexDirection:'row',gap:15}}>
                  <TouchableOpacity onPress={()=>{
navigation.goBack()
          }}>
 <Image
            style={{height:30,width:30}}
            source={require('../MyApp/images/back.png')}
          />
          </TouchableOpacity>
          <Text style={{color:'#2B2B2B',fontWeight:'900',fontSize:20}}>Plugin and charge</Text>
            </View>
            <View style={{flexDirection:'row',gap:15,alignItems:'center',marginVertical:20}}>
                <Image
                            style={{height:40,width:40}}
                            source={require('../MyApp/images/evicon.png')}
                          />
                              <Text style={{color:'#2B2B2B',fontWeight:'600',fontSize:14,marginRight:40}}>Please ensure the gun is pluggerd in successfully for the smooth charging experince</Text>
      
            </View>
                      <Text style={{color:'#2B2B2B',fontWeight:'600',fontSize:15}}>Charging Type</Text>

<View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:15}}>
    <View style={{flex:1,gap:8}}>
      <Text style={{color:'#2B2B2B',fontWeight:'600',fontSize:15,textAlign:'center'}}>Amount</Text>
<View style={{height:4,backgroundColor:'#205F75'}}></View>
    </View>
    <View style={{flex:1,gap:8}}>
      <Text style={{color:'#2B2B2B',fontWeight:'600',fontSize:15,textAlign:'center'}}>Units</Text>

    </View>
    <View style={{flex:1,gap:8}}>
      <Text style={{color:'#2B2B2B',fontWeight:'600',fontSize:15,textAlign:'center'}}>Time</Text>

    </View>
    <View style={{flex:1,gap:8}}>
      <Text style={{color:'#2B2B2B',fontWeight:'600',fontSize:15,textAlign:'center'}}>Percentage</Text>

    </View>
</View>
        </View>

    </SafeAreaView>
  )
}

export default PluginAndChargeView

const styles = StyleSheet.create({})