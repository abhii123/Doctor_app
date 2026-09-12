import { FlatList, Image, SafeAreaView, StyleSheet, Text, View ,useWindowDimensions} from 'react-native'
import React from 'react'

const OnboardingView = ({navigation}) => {

const dataArray = [
  {
    id: '1',
    image: require('../MyApp/images/Image.png'),
    title: 'Meet Doctors Online',
    description:
      'Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations.',
  },
  {
    id: '2',
    image: require('../MyApp/images/Image2.png'),
    title: 'Connect with Specialists',
    description:
      'Connect with Specialized Doctors Online for Convenient and Comprehensive Medical Consultations.',
  },
  {
    id: '3',
    image: require('../MyApp/images/Image3.png'),
    title: 'Thousands of Online Specialists',
    description:
      ' Explore a Vast Array of Online Medical Specialists, Offering an Extensive Range of Expertise Tailored to Your Healthcare Needs.',
  },
];

 const { width, height } = useWindowDimensions();

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          flex: 1,
        }}
      >
        <Image
          style={{
            width: '100%',
            height: height * 0.65,
            resizeMode: 'cover',
          }}
          source={item.image}
        />

        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 25,
            marginTop: 16,
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            color: '#6B7280',
            marginHorizontal: 20,
            marginTop: 8,
          }}
        >
          {item.description}
        </Text>
      </View>
    );
  };

  return (
     <View style={{flex:1,backgroundColor:'white',height:'100%',justifyContent:'space-between'}}>
<View >
 <FlatList
      data={dataArray}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
</View>


 
     <View>
 <View style={{backgroundColor:'#1C2A3A',height:50,marginHorizontal:20,borderRadius:25,alignItems:'center',justifyContent:'center'}}>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'white'}}>Next</Text>   
      </View>
       <View  style={{borderColor:'#1C2A3A',borderWidth:1,height:50,marginHorizontal:20,borderRadius:25,marginBottom:'13%',alignItems:'center',justifyContent:'center',marginTop:10}}>
      <Text onPress={()=>{
        navigation.navigate('login')
      }} style={{textAlign:'center',fontWeight:'bold',fontSize:20,color:'#1C2A3A'}}>Skip</Text>   
      </View>
     </View>
    </View>
    
    
  )
}

export default OnboardingView

const styles = StyleSheet.create({})