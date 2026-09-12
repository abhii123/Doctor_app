
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

const EnterYourDetialsView = ({navigation}) => {
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

          <Image
            style={styles.profile}
            source={require('../MyApp/images/profile.png')}
          />

          <Text style={styles.label}>User name</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Abhishek Mishra"
              placeholderTextColor="black"
              style={styles.input}
            />
          </View>

          <Text style={styles.label}>Date of birth</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="12/3/1995"
              placeholderTextColor="black"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}>Gender</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Male"
              placeholderTextColor="black"
              style={styles.input}
              secureTextEntry
            />
          </View>

          

          <View style={styles.button}>
            <Text onPress={()=>{
            }} style={styles.buttonText}>
              Save
            </Text>
          </View>

         
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EnterYourDetialsView;

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
    marginTop: 15,
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