
import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

const ForgetPasswordView = ({navigation}) => {

const user = useSelector(state=> state.auth.user)
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image
            style={styles.logo}
            source={require('../MyApp/images/Logo.png')}
          />
<Text style={styles.title}>
            Forget Password?{user?.name}
          </Text>

          <Text style={styles.subtitle}>
            Enter your Email, we will send you a verification code.
          </Text>

         

          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="abc@gmail.com"
              placeholderTextColor="black"
              style={styles.input}
              secureTextEntry
            />
          </View>

          

          <View style={styles.button}>
            <Text onPress={()=>{
              navigation.navigate('resetpassword')
            }} style={styles.buttonText}>
              Send Code
            </Text>
          </View>
         <Text onPress={()=>{
                    navigation.goBack()
                   }} style={styles.titleBack}>Back</Text>
         
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgetPasswordView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingBottom: 30,
  },

  logo: {
    height: 120,
    width: '100%',
    marginTop: 15,
    resizeMode: 'contain',
  },
  profile: {
    height: 150,
    width: '100%',
    marginTop: 15,
    resizeMode: 'contain',
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 16,
  },
titleBack: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 16,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6B7280',
    marginHorizontal: 20,
    marginTop: 8,
  },

  label: {
    textAlign: 'left',
    fontSize: 14,
    color: '#6B7280',
    marginHorizontal: 20,
    marginTop: 25,
  },

  inputContainer: {
    height: 45,
    backgroundColor: '#F9FAFB',
    marginHorizontal: 20,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginTop: 6,
  },

  input: {
    height: 45,
    color: 'black',
  },

  button: {
    height: 45,
    backgroundColor: '#1C2A3A',
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    marginTop: 55,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight:'800',
    color: '#f2f2f3',
  },

  signInContainer: {
    flexDirection: 'row',
    marginVertical: 14,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInText: {
    fontSize: 15,
    color: '#4e4e50',
    marginHorizontal: 8,
  },

  signInButton: {
    fontSize: 15,
    color: '#4e4e50',
    fontWeight: '800',
  },
});