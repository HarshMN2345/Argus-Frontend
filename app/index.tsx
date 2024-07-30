import { Colors } from '@/constants/Colors';
import { ModalType } from '@/types/enums';
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Index() {
  const {top}=useSafeAreaInsets();
  const showModel=async(type:ModalType)=>{

  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
  <View style={[
    styles.container,
    {
      paddingTop:top+30,
    }
  ]}>
    <Image source={require('../assets/images/login/okay.jpg')} style={styles.image}/>
    <Text style={styles.introText}>Argus: Empowering Your Workforce with Efficienc</Text>
    <View style={styles.bottomContainer}>
      <TouchableOpacity style={styles.btn} onPress={()=>showModel(ModalType.SignUp)}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>showModel(ModalType.Login)}>
        <Text style={styles.btnText}>Log In</Text>
      </TouchableOpacity>

    </View>
    
  </View>
  </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  image: {
    height: 410,
    paddingHorizontal: 40,
    resizeMode: 'contain',
  },
  introText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 17,
    padding: 30,
  },
  bottomContainer: {
    width: '100%',
    paddingHorizontal: 40,
    gap: 10,
  },
  btn: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  btnText: {
    fontSize: 18,
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
    marginHorizontal: 60,
  },
  link: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});